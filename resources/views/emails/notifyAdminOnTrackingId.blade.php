<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <th>Order</th>
        <th>Customer Personal Data</th>
        <th>Customer Shipping Data</th>
        <th>Tracking info</th>
    </tr>
    <tr>
        <td>
            <p># {{ $order->id }}</p>
        </td>
        <td>
            <p>Name: {{ $order->first_name }} {{ $order->last_name }}</p>
            <p>Phone: {{ $order->phone_number }} </p>
            <p>Email: {{ $order->email }} </p>
        </td>
        <td>
            <p>Address: {{ $order->address }}</p>
            <p>City: {{ $order->city }} </p>
            <p>Zip: {{ $order->zip }} </p>
        </td>
        <td>
            <p>
                {{ __('mail.shippingTrackingUrlInfo') }}
                <a href="{{  $shippingServiceUrl }}" target="_blank">{{ $shippingServiceName }}</a>
            </p>
            <p>{{__('mail.shippingTrackingId',['tracking_no'=> $order->shipping->tracking_no])}}</p>
        </td>
    </tr>
</table>
</body>
</html>


