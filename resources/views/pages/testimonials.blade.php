@extends('layouts.about')
@section('meta_title', __('seo.meta_title_home'))
@section('meta_description', __('seo.meta_description_home'))
@section('content')
	<h1 class="text-align-center">{{__('testimonials.title')}}</h1>
	<div class="testimonials-gallery"></div>
	<div class="progress text-center" id="progress" style="display: none;">
		<object data="{{asset('img/progress.svg')}}" type="image/svg+xml"></object>
	</div>
@stop
@section('pageSpecificScripts')
	<script src="{{asset('js/magnific-popup.js')}}"></script>
	<script src="{{mix('js/testimonials.js')}}"></script>
@stop
@section('css')
	<link rel="stylesheet" href="{{mix('css/testimonials.css')}}" />
@stop