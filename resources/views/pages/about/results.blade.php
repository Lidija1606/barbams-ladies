@extends('layouts.about')

@section('meta_title', __('seo.meta_title_results'))
@section('meta_description', __('seo.meta_description_results'))
@section('content')
    <h1 class="text-align-center"> {{__('elixir.results')}} </h1>
    <div class="galeries-container">
    </div>
    <button onclick="window.location='{{ url("order/beard-growth-elixir") }}'"
							class="barbams-button results-order-button-invisible results-order-button font-heavy buy-button p-medium elixir-order-button no-top-margin order-button-inverted"
					>{{__('results.order')}}
	</button>
    <div class="invisible">
            @foreach($featureImages as $key => $path)
                <div class="featureImage">
                    <img src="{{$path['imagePath']}}">
                </div>
            @endforeach
                <div class="not-result logo"><img src="{{asset('img/logo.png')}}" style="max-width: 200px; margin: auto;"></div>
                <div class="not-result logo"><img src="{{asset('img/logo.png')}}" style="max-width: 200px; margin: auto;"></div>
                <div class="not-result logo"><img src="{{asset('img/logo.png')}}" style="max-width: 200px; margin: auto;"></div>
            
                <div class="not-result empty"></div>
                <div class="not-result empty"></div>
                <div class="not-result empty"></div>
            @foreach($textBoxes as $key => $text)
              {{-- Mozda ti zatreba key <p>{{$key}}</p>--}}
            <div class="not-result text"> 
                <p>{{$text}}</p>
            </div>
                @endforeach
    </div>
    <div class="progress text-center" id="progress" style="display: none;">
            <object data="{{asset('img/progress.svg')}}" type="image/svg+xml"></object>
        </div>
        <div class="row results-page popup-gallery">
        </div>
    <div class="row">
        <div class="col-12">
            <h3 class="text-center noselect">
                *<b>{{__('results.note_title')}}</b>*
                <br>{{__('results.note_text')}}
            </h3>
        </div>
    </div>
    <div class="row">
    </div>
@stop
@section('css')
    <link rel="stylesheet" type="text/css" href="{{asset('css/results.css')}}">
@stop
@section('pageSpecificScripts')
    <script src="{{asset('js/magnific-popup.js')}}"></script>
    <script src="{{asset('js/results.js')}}"></script>
@stop
