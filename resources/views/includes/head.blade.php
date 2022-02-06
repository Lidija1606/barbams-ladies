<meta charset="utf-8">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="expires" content="-1">
    <title>Barbam's</title>
<meta name="title" content="@yield('meta_title')">
<meta name="description" content="@yield('meta_description')">
<meta name="keywords"
      content="barbams, how to grow a beard, beard growth oil, grow beard faster, thick beard, strong beard">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="{{asset('fonts/gotham-narrow-cufonfonts-webfont/style.css')}}"
      rel="stylesheet" type="text/css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" rel="stylesheet"
      type="text/css">
<link rel="stylesheet" type="text/css" href="{{asset('css/jquery.bxslider.css')}}">
@if(in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
<link rel="stylesheet" href="{{mix('css/partners.css')}}">
@endif
<link rel="stylesheet" href="{{mix('css/client.css')}}">
@yield('css')
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WHHT82T');</script>
<!-- End Google Tag Manager -->

{{--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css"/>--}}
<link rel="stylesheet" href="{{asset('css/tingle.min.css')}}">
<link rel="stylesheet" href="{{asset('css/magnific-popup.css')}}">
@yield('assets')
{{--<meta name="csrf-token" content="{{ csrf_token() }}" />--}}
