@extends('layouts.about')

@section('meta_title', __('seo.meta_title_contact'))
@section('meta_description', __('seo.meta_description_contact'))
@section('content')

	<div class="row contact-page">
		<div class="col-12 text-center contact-text">
			<h1 class="text-center">{{__('about.contactUs.heading')}}</h1>
			<p>{{__('about.contactUs.paragraph')}}<br/>{{__('about.contactUs.paragraph1')}}</p>
			<p>{{__('about.contactUs.paragraph2')}}</p>
			<a class="social-icon" href="{{!in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? 'https://www.facebook.com/barbamselixir' : 'https://www.facebook.com/barbams.me' }}" target="_blank">
                <img src="{{asset('img/social/facebook-icon.png')}}" alt="Barbams Facebook page">
            </a>
			<a class="social-icon" href="{{ in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? 'https://instagram.com/barbams.middleeast' : 'https://www.instagram.com/barbams.europe' }}" target="_blank">
				<img src="{{asset('img/social/instagram-icon.png')}}" alt="Barbams Instagram page">
            </a>
			<p class="p-custom">
                {{__('about.contactUs.paragraph3')}}<br/>
                {{__('about.contactUs.paragraph4')}}
                <b>{{__('about.contactUs.facebook')}}</b>
                {{__('about.contactUs.paragraph4a')}}
                <b>{{__('about.contactUs.instagram3')}}</b>
                {{__('about.contactUs.paragraph4b')}}
            </p>

			<p>
                {{__('about.contactUs.paragraph5')}}
                <a href="mailto:info@barbams.com">{{__('about.contactUs.paragraph6')}}</a>
                {{__('about.contactUs.paragraph7')}}<br/>
                {{__('about.contactUs.paragraph8')}}
            </p>
			<h3 class="text-center gotham-bold">{{__('about.contactUs.important')}}</h3>
			<p>
                {{__('about.contactUs.response1')}}
                <span>{{__('about.contactUs.response2')}}</span>
                {{__('about.contactUs.response3')}}
                <span>{{__('about.contactUs.facebook')}}</span>
                {{__('about.contactUs.response4')}}
                <span>{{__('about.contactUs.instagram1')}}{{__('about.contactUs.instagram2')}}</span>
                {{__('about.contactUs.response5')}}
            </p>
		</div>
		{{--<div class="col-12 text-center">--}}
		{{--<h2>{{__('about.thankYou.follow')}}</h2>--}}
	</div>

    <div class="contact-map {{ in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? ' uae' : '' }}">
        <img src="{{asset(__('about.contactUs.map'))}}" alt="Barbams Location" />
        <div class="contact-map-info">
            <h3 class="gotham-bold">{{__('about.contactUs.contactInfo')}}</h3>
            <h4 class="contact-company-name-info">Barbams Perfumes and Cosmetics Trading LLC</h4>
    @if(in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
    <p class="contact-po-box-info">Po Box: 27363</p>
            @endif
    <p class="contact-info-email">
        <img src="{{asset('img/contact-page/barbams-email-icon.png')}}" alt="Barbams Email" />
        <a href="mailto:info@barbams.com">info@barbams.com</a>
    </p>
    <p>
        <img src="{{asset('img/contact-page/barbams-pointer-icon.png')}}" alt="Barbams Address" />
        <span>
            {{__('about.contactUs.address1')}}<br/>
            {{__('about.contactUs.address2')}}</br/>
            {{__('about.contactUs.address3')}}</br/>
            {{__('about.contactUs.address4')}}
        </span>
    </p>
</div>
</div>

<div class="contact-locations">
<h1 class="text-center">{{__('about.contactUs.weAreAt')}}</h1>
<div class="contact-locations-box">
    <h3 class="col-12 text-center gotham-bold">{{__('about.contactUs.continent1')}}</h3>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country1')}}<br/>
            {{__('about.contactUs.country2')}}<br/>
            {{__('about.contactUs.country3')}}<br/>
            {{__('about.contactUs.country4')}}<br/>
            {{__('about.contactUs.country5')}}<br/>
            {{__('about.contactUs.country6')}}<br/>
            {{__('about.contactUs.country7')}}<br/>
            {{__('about.contactUs.country8')}}<br/>
            {{__('about.contactUs.country9')}}<br/>
            {{__('about.contactUs.country10')}}<br/>
            {{__('about.contactUs.country11')}}<br/>
            {{__('about.contactUs.country12')}}<br/>
            {{__('about.contactUs.country13')}}<br/>
            {{__('about.contactUs.country14')}}<br/>
            {{__('about.contactUs.country15')}}<br/>
        </p>
    </div>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country16')}}<br/>
            {{__('about.contactUs.country17')}}<br/>
            {{__('about.contactUs.country18')}}<br/>
            {{__('about.contactUs.country19')}}<br/>
            {{__('about.contactUs.country20')}}<br/>
            {{__('about.contactUs.country21')}}<br/>
            {{__('about.contactUs.country22')}}<br/>
            {{__('about.contactUs.country23')}}<br/>
            {{__('about.contactUs.country24')}}<br/>
            {{__('about.contactUs.country25')}}<br/>
            {{__('about.contactUs.country26')}}<br/>
            {{__('about.contactUs.country27')}}<br/>
            {{__('about.contactUs.country28')}}<br/>
            {{__('about.contactUs.country29')}}<br/>
            {{__('about.contactUs.country30')}}<br/>
        </p>
    </div>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country31')}}<br/>
            {{__('about.contactUs.country32')}}<br/>
            {{__('about.contactUs.country33')}}<br/>
            {{__('about.contactUs.country34')}}<br/>
            {{__('about.contactUs.country35')}}<br/>
            {{__('about.contactUs.country36')}}<br/>
            {{__('about.contactUs.country37')}}<br/>
            {{__('about.contactUs.country38')}}<br/>
            {{__('about.contactUs.country39')}}<br/>
            {{__('about.contactUs.country40')}}<br/>
            {{__('about.contactUs.country41')}}<br/>
            {{__('about.contactUs.country42')}}<br/>
            {{__('about.contactUs.country43')}}<br/>
            {{__('about.contactUs.country44')}}<br/>
            {{__('about.contactUs.country45')}}<br/>
        </p>
    </div>
    <h3 class="col-12 text-center gotham-bold">{{__('about.contactUs.continent2')}}</h3>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country46')}}<br/>
            {{__('about.contactUs.country47')}}<br/>
        </p>
    </div>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country48')}}<br/>
            {{__('about.contactUs.country49')}}<br/>
        </p>
    </div>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country50')}}<br/>
            {{__('about.contactUs.country51')}}<br/>
        </p>
    </div>
    <h3 class="col-12 text-center gotham-bold">{{__('about.contactUs.continent3')}}</h3>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country52')}}<br/>
            {{__('about.contactUs.country53')}}<br/>
            {{__('about.contactUs.country54')}}<br/>
        </p>
    </div>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country55')}}<br/>
            {{__('about.contactUs.country56')}}<br/>
            {{__('about.contactUs.country57')}}<br/>
        </p>
    </div>
    <div class="col-4">
        <p class="text-center">
            {{__('about.contactUs.country58')}}<br/>
            {{__('about.contactUs.country59')}}<br/>
            {{__('about.contactUs.country60')}}<br/>
        </p>
    </div>
</div>
</div>
@stop

@section('css')
    <link rel="stylesheet" type="text/css" href="{{asset('css/contact.css')}}">
@stop
