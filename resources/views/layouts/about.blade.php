<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
	@include('includes.head')
</head>
<body>
@include('includes.gtm')
<div class="cover-spin">
	<p>Please do not refresh your browser.</p>
</div>

{{--<div class="lds-roller">--}}
{{--<div></div>--}}
{{--<div></div>--}}
{{--<div></div>--}}
{{--<div></div>--}}
{{--<div></div>--}}
{{--<div></div>--}}
{{--<div></div>--}}
{{--<div></div>--}}
</div>
{{--<div class="spinner"></div>--}}
<div class="wrapper {{  $view_name == 'pages-about-thankyou' ? 'thank-you-page-background' : '' }} ">
	{{--<header class="container">--}}
		@include('includes.header')
	{{--</header>--}}
	<div class="{{  $view_name != 'pages-about-faq' ? 'container' : '' }} first about-no-content {{  $view_name == 'pages-product-order' ? 'order_page_background' : '' }} {{  $view_name == 'pages-about-results' ? 'about-results' : '' }}">
		@yield('content')
	</div>
	<footer class="row footer text-center">
		@include('includes.footer')
	</footer>
	@yield('pageSpecificScripts')
</div>
</body>
</html>
