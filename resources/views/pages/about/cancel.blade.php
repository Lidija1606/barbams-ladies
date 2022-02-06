@extends('layouts.about')
@section('content')

	<div class="row">
		<div class="col-12 text-center">
			<h1>{{__('about.cancel.welcome')}}</h1>
			<p>{{__('about.thankYou.follow')}}</p>
			<p>{{__('about.thankYou.follow1')}}</p>
			<p>{{__('about.thankYou.follow2')}}</p>
		</div>

	</div>
	<div class="row text-center margin-top-3 social-icons-thankyou-page social-icons">
		<a href="{{ !in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? 'https://www.facebook.com/barbamselixir' : 'https://www.facebook.com/barbams.me' }}" target="_blank">
			<img src="{{asset('/img/social/facebook-icon.png')}}"> </a>
		<a href="{{ in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? 'https://instagram.com/barbams.middleeast' : 'https://www.instagram.com/barbams.europe' }}" target="_blank">
			<img src="{{asset('/img/social/instagram-icon.png')}}"> </a>
		<a href="https://www.youtube.com/channel/UCm-OYtEuEO8i8QGoI19zFIw" target="_blank">
			<img src="{{asset('/img/social/youtube-icon.png')}}"> </a>
	</div>
@stop

@section('pageSpecificScripts')
	<script>
      gtag('event', 'conversion', {'send_to': 'AW-816479898/SI-zCNXH2n0Qmv2phQM'});
	</script>
@stop
