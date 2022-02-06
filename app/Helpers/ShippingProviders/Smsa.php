<?php


namespace App\Helpers\ShippingProviders;

use App\Order;
use App\PaymentType;
use App\Shipping;
use App\ShippingErrorLog;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

class Smsa
{
    private $_apiUrl = "http://track.smsaexpress.com/SECOM/SMSAwebService.asmx";
    private $_passkey;
    private $_sender_name;
    private $_contact_person;
    private $_POBox;
    private $_address;
    private $_sender_country;
    private $_sender_city;
    private $_sender_phone;
    private $_shipping_type;
    private static $instance;


    public function __construct(){

        if(Config::get('smsa.testing_environment'))
            $this->_passkey = Config::get('smsa.passKey_testing');
        else
            $this->_passkey = Config::get('smsa.passKey_production');

        $this->_sender_name     = Config::get('smsa.sender_name');
        $this->_contact_person  = Config::get('smsa.contact_person');
        $this->_POBox           = Config::get('smsa.POBox');
        $this->_address         = Config::get('smsa.address');
        $this->_sender_country  = Config::get('smsa.sender_country');
        $this->_sender_city     = Config::get('smsa.sender_city');
        $this->_sender_phone    = Config::get('smsa.sender_phone');
        $this->_shipping_type   = Config::get('smsa.shipping_type');
    }

    public static function getInstance(): Smsa
    {
        if (self::$instance === null) {
            self::$instance = new Smsa();
        }

        return self::$instance;
    }

    /**
     * @param Order $order
     * @return array
     */
    public function Shipping(Order $order){

        $parameters =[
        'refNo'         => $order->id,
        'idNo'         => $order->id,
      'cName'         => $order->first_name,
      'cntry'         => 'KSA',
      'cCity'         => $order->city,
      'cMobile'       => $order->phone_number,
      'cAddr1'        => $order->address,
      'cAddr2'        => '',
      'PCs'           => $order->quantity,
      'cEmail'        => $order->email,
      'weight'        => '1',
      'cZip'          => $order->zip,
      'cPOBox'        => '',
      'cTel1'         => '',
      'cTel2'         => '',
      'carrValue'     => '',
      'carrCurr'      => '',
      'codAmt'        => $order->paymentTypes->type == PaymentType::PAYMENT_TYPE_CASH ? $order->total : 0,
      'custVal'       => '',
      'custCurr'      => '',
      'insrAmt'       => '',
      'insrCurr'      => '',
      'itemDesc'      => '',
      'prefDelvDate'  => '',
      'gpsPoints'     => ''
        ];

        $variables = array(
            'passKey'       => $this->_passkey,
            'sentDate'      => date('Y/m/d'),
            'shipType'      => $this->_shipping_type,
            'sName'         => $this->_sender_name,
            'sContact'      => $this->_contact_person,
            'sAddr1'        => $this->_address,
            'sAddr2'        => '',
            'sCity'         => $this->_sender_city,
            'sPhone'        => $this->_sender_phone,
            'sCntry'        => $this->_sender_country,
        );
        Log::info('====== smsa data ======= ' . json_encode(array_merge($parameters, $variables)));


        $xml = $this->createXml('addShip', array_merge($parameters, $variables));
        $result = $this->send($xml);

        if(isset($result->Body->addShipResponse))
            $response = (array) $result->Body->addShipResponse->addShipResult;
        else
            $response = (array) $result->Body->Fault->faultstring;

        if(is_numeric($response[0])){
            $shipping = new Shipping();
            $shipping->status = true;
            $shipping->tracking_no = $response[0];
            $shipping->so_no = 'smsa';
            $shipping->trace_id = $response[0];

            $order->shipping()->save($shipping);
            Log::info('====== smsa shipping info ======= ' . json_encode($response));

        }else{
            $shippingErrorLog = new ShippingErrorLog();
            $shippingErrorLog->status = false;
            $shippingErrorLog->message = json_encode($response);
            $shippingErrorLog->error_code = '';
            $shippingErrorLog->trace_id = '';
            $order->shippingErrorLog()->save($shippingErrorLog);

            Log::error('====== smsa shipping failed  ======= ' . json_encode($response));
        }
    }

    public function PrintAWB($awb_no){
        $variables = array(
            'passKey'       => $this->_passkey,
            'awbNo'         => $awb_no
        );

        $xml = $this->createXml('getPDF', $variables);
        $result = $this->send($xml);

        $response = (array) $result->Body->getPDFResponse;

        if(!empty($response) && isset($response['getPDFResult'])){
            file_put_contents( public_path('smsa_labels/'.$awb_no.'.pdf'), base64_decode($response['getPDFResult']));
            return ['status' => true, 'value' => 'smsa_labels/'.$awb_no.'.pdf'];
        }else{
            return ['status' => false, 'value' => ''];
        }
    }

    public function Tracking($awb_no){
        $variables = array(
            'passKey'       => $this->_passkey,
            'awbNo'         => $awb_no
        );

        $xml = $this->createXml('getTracking', $variables);
        $result = $this->send($xml);

        $response = (array) $result->Body;

        if(isset($response['getTrackingResponse'])){
            $array = (array) $result->Body->getTrackingResponse->getTrackingResult->diffgrdiffgram->NewDataSet->Tracking;
            return ['status' => false, 'value' => $array];
        }else{
            $msg = (array) $response['Fault']->faultstring;
            return ['status' => false, 'value' => $msg[0]];
        }
    }

    public function Cancel($awb_no, $reason){
        $variables = array(
            'awbNo'     => $awb_no,
            'passkey'   => $this->_passkey,
            'reas'      => $reason
        );

        $data = $this->createXml('cancelShipment', $variables);
        $result = $this->send($data);

        $response = (array) $result->Body->cancelShipmentResponse->cancelShipmentResult;
        return ['status' => false, 'value' => $response[0]];
    }

    private function createXml($method, $variables){
        $xmlcontent = '<?xml version="1.0" encoding="utf-8"?>
          <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <'.$method.' xmlns="http://track.smsaexpress.com/secom/">';
        if(count($variables)){
            foreach($variables As $key=>$val){
                $xmlcontent .= '<'.$key.'>'.$val.'</'.$key.'>';
            }
        }
        $xmlcontent .= '</'.$method.'>
            </soap:Body>
          </soap:Envelope>';

        $headers = array(
            "POST /SECOM/SMSAwebService.asmx HTTP/1.1",
            "Host: track.smsaexpress.com",
            "Content-Type: text/xml; charset=utf-8",
            "Content-Length: ".strlen($xmlcontent),
            "SOAPAction: http://track.smsaexpress.com/secom/".$method
        );

        return array(
            'xml'       => $xmlcontent,
            'header'    => $headers
        );
    }

    public function send(array $data){
        $ch = curl_init();
        //curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $data['header']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_URL, $this->_apiUrl);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data['xml']);
        $content=curl_exec($ch);

        $clean_xml = str_ireplace(['SOAP-ENV:', 'SOAP:'], '', $content);
        $xml = simplexml_load_string($clean_xml);
        return $xml;
    }
}
