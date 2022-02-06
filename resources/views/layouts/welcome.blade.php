<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
	@include('includes.head')

	<link rel="stylesheet" type="text/css" href="{{asset('css/barbams-slider.css')}}">
</head>
<body>
@include('includes.gtm')
<div class="wrapper">
	{{--<header class="header-container">--}}
	@include('includes.header')
	{{--</header>--}}
	<div class="col-6 elixir-container-top elixir-container-top-desk">

			<h1>{{__('home.elixir')}}</h1>
				<p id="part-bold-text-top">{{__('home.elixir.descr')}}</p>

				<div>
					<a class="a-button margin-right-2" href="{{'/products/elixir'}}">{{__('home.elixir.seeMore')}}</a>

					<button onclick="window.location='{{ url("order/beard-growth-elixir") }}'"
							class="barbams-button font-heavy buy-button p-medium elixir-order-button no-top-margin order-button-inverted"
					>{{__('home.elixir.order')}}
					</button>

				</div>

		</div>
	<div class="barbams-home-slider-wrapper">

      <?php
      $sliderLangFolder = $language === 'sr' ? 'sr' : 'en';
      ?>


			  <div class="barbams-home-slider">
				  <div class="barbams-slide-item current">
					  <img class="desk" id="deskimg" src="{{asset('img/homepage-slider/'.$sliderLangFolder.'/home-page-slider-desk-1st.jpeg')}}" alt="Barbams" />
					  <img class="mob" id="mobimg" src="{{asset('img/homepage-slider/'.$sliderLangFolder.'/1st_slider.jpg')}}" alt="Barbams" />
				  </div>
				  <div class="barbams-slide-item">
					  <img class="desk" src="{{asset('img/homepage-slider/'.$sliderLangFolder.'/home-page-slider-desk-2nd.jpeg')}}" alt="Barbams" />
					  <img class="mob" src="{{asset('img/homepage-slider/'.$sliderLangFolder.'/2nd_slider.jpg')}}" alt="Barbams" />
				  </div>
			  </div>

			  <div class="barbams-home-slider-buttons">
				  <button id="barbams-prev">&larr;</button>
				  <button id="barbams-next">&rarr;</button>
			  </div>

	</div>

	<div class="{{  $view_name != 'pages-home' ? 'container first-margin' : '' }}">
		@yield('content')
	</div>

	<footer class="footer text-center">
		@include('includes.footer')
		<script src="/js/barbams-slider.js"></script>
	</footer>
</div>
</body>
</html>
