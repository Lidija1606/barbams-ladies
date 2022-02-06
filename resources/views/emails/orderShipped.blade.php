
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <meta name="format-detection" content="telephone=no" />
    <link href="{{asset('fonts/gotham-narrow-cufonfonts-webfont/style.css')}}"
          rel="stylesheet" type="text/css">
    <style>
        /* Reset styles */
        @font-face {
            font-family: 'Gotham Bold';
            src: url('https://www.barbams.com/public/fonts/gotham-narrow-cufonfonts-webfont/Gotham-Bold.woff');
        }
        @font-face {
            font-family: 'GothamLight';
            src: url('https://www.barbams.com/public/fonts/gotham-narrow-cufonfonts-webfont/GothamLight.woff');
        }
        .hx{
            background-color: #000000!important;
        }
        body {
            margin: 0;
            padding: 0;
            min-width: 100%;
            width: 100% !important;
            height: 100% !important;
            background-color: #000000!important;
        }

        body,
        table,
        td,
        div,
        p,
        a {
            -webkit-font-smoothing: antialiased;
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            line-height: 100%;
        }
        a, .ii a[href]{
            color: #FFFFFF!important;
        }
        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse !important;
            border-spacing: 0;
        }

        img {
            border: 0;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        /* Rounded corners for advanced mail clients only */

        @media all and (min-width: 560px) {
            .container {
                border-radius: 8px;
                -webkit-border-radius: 8px;
                -moz-border-radius: 8px;
                -khtml-border-radius: 8px;
            }
        }
        /* Set color for auto links (addresses, dates, etc.) */

        a,
        a:hover {
            color: #FFFFFF;
        }

        .footer a,
        .footer a:hover {
            color: #828999;
        }
    </style>
    <title>{{__('mail.barbams')}}</title>

</head>
<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
	background-color: #000;
	color: #FFFFFF;" bgcolor="#2D3445" text="#FFFFFF">
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; margin-bottom: 30px" class="background">
    <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" >
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="500" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 500px;" class="wrapper">

                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 20px;
			padding-bottom: 20px;">
                        <a target="_blank" style="text-decoration: none;" href="https://www.barbams.com"><img border="0" vspace="0" hspace="0" src="http://barbams.site/img/email-back.jpg" width="100%" height="" alt="" title="" style="
				color: #FFFFFF;
				font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" /></a>

                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;  padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px;
			padding-top: 5px;
			color: #f3cc6d; font-family: 'GothamLight';
			" class="header">
                        {{__('mail.superHeader')}}
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #FFFFFF;
            font-family: 'Gotham Bold';  line-height: 130%;
			" class="paragraph">
                        {{__('mail.content')}}
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #FFFFFF;
            font-family: 'Gotham Bold';  line-height: 130%;
			" class="paragraph">
                        {{__('mail.content2',['shipping_time' => $order->paymentTypes->productPrice->shipping_time])}}
                    </td>
                </tr>
                @if($order->shipping)
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #FFFFFF;
            font-family: 'Gotham Bold';  line-height: 130%;
			" class="paragraph">{{ __('mail.shippingTrackingUrlInfo') }}
                            <a href="{{  $shippingServiceUrl }}" target="_blank">{{ $shippingServiceName }}</a>

                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px;
			padding-top: 15px;
			color: #FFFFFF;
            font-family: 'Gotham Bold';  line-height: 130%;
			" class="paragraph">
                            {{__('mail.shippingTrackingId',['tracking_no'=> $order->shipping->tracking_no])}}
                        </td>
                    </tr>
                @endif
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;
			padding-bottom: 5px;" class="button">
                        <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                            <tr>
                                <td align="center" valign="middle">
                                    <a target="_blank" style="text-decoration: underline;
					color: #FFFFFF;  font-size: 17px; font-weight: 400; line-height: 120%;" href="<?php echo ( $order->paymentTypes->productPrice->country_code == 'AE') ? 'https://www.facebook.com/barbams.me' : 'https://www.facebook.com/barbamselixir/' ?>">
                                        <img src="https://barbams.com/img/social/facebook-icon.png" width="30px" alt="Barbams Facebook page">
                                    </a>
                                </td>
                                <td align="center" valign="middle">
                                    <a target="_blank" style="text-decoration: underline;
					color: #FFFFFF;  font-size: 17px; font-weight: 400; line-height: 120%;" href="<?php echo ($order->paymentTypes->productPrice->country_code == 'AE') ? 'https://instagram.com/barbams.middleeast' : 'https://instagram.com/barbams.europe' ?>">
                                        <img src="https://barbams.com/img/social/instagram-icon.png" width="30px" alt="Barbams Inastgram page">
                                    </a>
                                </td>
                                <td align="center" valign="middle">
                                    <a target="_blank" style="text-decoration: underline;
					color: #FFFFFF;  font-size: 17px; font-weight: 400; line-height: 120%;" href="https://www.youtube.com/channel/UCRueUc440wTF0iHHLBofVRg">
                                        <img src="https://barbams.com/img/social/youtube-icon.png" width="30px" alt="Barbams Youtube page">
                                    </a>
                                </td>

                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
			padding-top: 10px;
			padding-bottom: 20px;
			color: #828999;
            font-family: 'Gotham Bold';
			" class="footer">

                        Barbam's team 2021.
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;" >
                        <img src="https://barbams.com/img/logo.png" width="40%" alt="Barbams Logo">

                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;" >


                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

</body>

</html>
