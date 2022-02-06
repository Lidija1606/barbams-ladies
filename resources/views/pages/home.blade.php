@extends('layouts.welcome')
@section('meta_title', __('seo.meta_title_home'))
@section('meta_description', __('seo.meta_description_home'))
@section('content')
		<div class="row home results-list">
		<h1>{{__('home.results')}}</h1>
			<p class="home-page-align">{{__('home.resultsTitle')}}</p>
			{{--<div class="progress text-center" id="progress" style="opacity: 0;">--}}
				{{--<object data="{{asset('img/progress.svg')}}" type="image/svg+xml"></object>--}}
			{{--</div>--}}
			<div id="slider-gallery" class="row popup-gallery">
				@foreach($carousel as $key => $data)
						<a>
							<img alt="barbams elixir slide" src="{{asset( $data['thumbnail'])}}"
								 class="img-fluid">
							<p>{{$data['title']}}</p>
						</a>
				@endforeach
			</div>
			<div class="buttons">
                <button id="slider-button-left">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
						<path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
						l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
						C187.881,124.315,187.881,116.495,183.189,111.816z"/>
					</svg>
				</button>
                <button id="slider-button-right">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 				viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
						<path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
						l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
						C187.881,124.315,187.881,116.495,183.189,111.816z"/>
					</svg></button>

			</div>
			<div class="see-more-home">
				<a class="gotham-bold see-more" href="{{"/$language/about/results"}}">{{__('home.seeMoreResults')}}</a>
			</div>

			<!-- <h3 class="no-margin"><a href="{{"/$language/about/results"}}" style="text-decoration: underline">{{__('home.seeMoreResults')}}</a></h3> -->
		</div>
	<div class="row home-page">
		<div class="elixir-image">
			<div class="product">
				@if(!in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
				<img src="{{ asset('img/elixir.png') }}" alt="Beard Elixir" class=""
						 onclick="location.href='{{'/products/elixir'}}'">
				@else
					<img src="{{ asset('img/elixir-home-page-EID-eng.jpg') }}" alt="Beard Elixir" class=""
						 onclick="location.href='{{'/products/elixir'}}'">
				@endif
			</div>
		</div>
		<div class="col-6 elixir-container">

			<h1>{{__('home.elixir')}}</h1>
			<p id="part-bold-text">{{__('home.elixir.descr')}}</p>

			<div>
				<a class="a-button margin-right-2" href="{{'/products/elixir'}}">{{__('home.elixir.seeMore')}}</a>

				<button onclick="window.location='{{ url("order/beard-growth-elixir") }}'"
						class="barbams-button font-heavy buy-button p-medium elixir-order-button no-top-margin order-button-inverted"
				>{{__('home.elixir.order')}}
				</button>
			</div>
		</div>
	</div>

	@if(!in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
	<div class="row">
		<div class="home-page-video">
			<video width="100%" height="auto" poster="{{ asset('img/homepage-video/barbams-home-page-video-desktop.jpeg') }}" controls playsinline loop class="desktop-video">
				<source src="{{asset(__('home.homeVideoDesktop'))}}" type="video/mp4">
			</video>
			<video width="100%" height="auto" poster="{{ asset('img/homepage-video/barbams-home-page-video-mobile.jpeg') }}" controls playsinline loop class="mobile-video">
				<source src="{{asset(__('home.homeVideoMobile'))}}" type="video/mp4">
			</video>
		</div>
		<div class="home-page-video-description">
			<p class="text-center">{{__('home.videoDescription.firstRow')}}</p>
			<p class="text-center">{{__('home.videoDescription.secondRow')}}</p>
			<p class="text-center">{{__('home.videoDescription.thirdRow')}}</p>
			<p class="text-center">{{__('home.videoDescription.fourthRow')}}</p>
		</div>
	</div>
	@endif

	<div class="row home results-list testimonials-list">
		<h1>{{__('home.testimonials')}}</h1>
		<p class="home-page-align">{{__('home.testimonialsTitle')}}</p>
		<div id="testimonials-slider-gallery" class="row popup-gallery">
			@foreach($testimonialsCarousel as $testimonial)
					<a>
						<img alt="barbams elixir slide" src="{{asset($testimonial['thumbnail'])}}" class="img-fluid">
					</a>
			@endforeach
		</div>
		<div class="buttons">
			<button id="testimonials-slider-button-left">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
					<path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
					l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
					C187.881,124.315,187.881,116.495,183.189,111.816z"/>
				</svg>
			</button>
			<button id="testimonials-slider-button-right">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
					<path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
					l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
					C187.881,124.315,187.881,116.495,183.189,111.816z"/>
				</svg>
			</button>
		</div>
		<div class="see-more-home">
			<a class="gotham-bold see-more" href="{{"/$language/testimonials"}}">{{__('home.seeMoreTestimonials')}}</a>

		</div>

		<!-- <h3 class="no-margin"><a href="{{"/$language/about/results"}}" style="text-decoration: underline">{{__('home.seeMoreResults')}}</a></h3> -->
	</div>

	@if(in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
		<div class="row partners-section">
			<div class="col-12 partners">
				<h1>{{__('home.partners')}}</h1>
				<img src="{{ asset('img/partners/1847_logo.png') }}" alt="1847">
				<img src="{{ asset('img/partners/cape_and_fade_logo.png') }}" alt="cape and fade">
				<img src="{{ asset('img/partners/goodfellas_logo.png') }}" alt="goodfellas">
				<img src="{{ asset('img/partners/italiana_logos.png') }}" alt="Italiana">
				<img src="{{ asset('img/partners/local_logo.png') }}" alt="local">
				<img src="{{ asset('img/partners/cg_logo.png') }}" alt="CG">
				<img src="{{ asset('img/partners/musk_logo.png') }}" alt="Musk">
			</div>
		</div>
	@endif
@stop
@section('css')
    <link rel="stylesheet" href="{{mix('css/home-video.css')}}">
@stop
