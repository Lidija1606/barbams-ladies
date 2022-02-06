{{--@extends('layouts.product')--}}
@extends('layouts.about')

@section('meta_title', __('seo.meta_title_elixir_page'))
@section('meta_description', __('seo.meta_description_elixir_page'))
@section('content')
    <div class="row elixir-page">
        <div class="col-12 elixir-page-bkg">
            @if(!in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
            <img class="desktop-bkg" src="{{asset('img/elixir/barbams-beard-elixir-background.png')}}"
                 alt="Barbam's | Beard Elixir"/>
            <img class="mobile-bkg" src="{{ asset('img/elixir/barbams-beard-elixir-background-mob.jpg') }}" alt="Beard Elixir summer edition">
            @else
                <img class="desktop-bkg" src="{{ asset('img/elixir-page-background-EID-desktop.png') }}"
                     alt="Barbam's | Beard Elixir"/>
                <img class="mobile-bkg" style="margin-top: -3%" src="{{ asset('img/elixir-page-background-mob-EID.png') }}" alt="Beard Elixir summer edition">
            @endif
        </div>
        <div class="col-12 elixir-page-text text-center">
            <h1>{{__('elixir.heading')}}</h1>
            <p>{{__('elixir.longDesc1')}}</p>
            <p>{{__('elixir.longDesc2')}}</p>

            <p class="red gotham-bold">{{__('elixir.ingredientsTitle')}}</p>

            @if(in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
                <p>{{__('elixir.ingredientsUAE')}}</p>
                <p>{{__('elixir.longDesc3')}}</p>
                @else
                <p>{{__('elixir.ingredients')}}</p>
            @endif
        </div>

        <div class="col-12 elixir-certificates text-center">
            <a href="{{asset('img/elixir/elixir_ingredients_1.jpg')}}">
                <img class="img-fluid col-3-ne" src="{{ asset('img/elixir/elixir_ingredients_1.jpg')}}">
            </a>
            <a href="{{asset('img/elixir/elixir_ingredients_2.jpg')}}">
                <img class="img-fluid col-3-ne" src="{{ asset('img/elixir/elixir_ingredients_2.jpg')}}">
            </a>
        </div>

        <div class="col-12 elixir-page-text text-center">
            <div class="elixir-page-price">
                        @if($oldPriceActive)
                            <h3 class="text-center old-elixir-price gotham-bold"> {{__('order.form.price')}}
                                @if($countryCode != 'AE')
                                    <span>{{$oldPrice}} {{$currency}}</span>
                                @else
                                    <span>{{$currency}} {{$oldPrice}}</span>
                                @endif
                            </h3>
                            <h3 class="text-center gotham-bold">
                            {{__('order.form.discount')}}
                                @if($countryCode != 'AE')
                                    <span>{{$price}} {{$currency}}</span>
                                @else
                                    <span>{{$currency}} {{$price}} </span>
                                @endif
                            </h3>
                        @else
                            <h3 class="text-center gotham-bold">{{__('elixir.price')}}
                                @if($countryCode != 'AE')
                                    <span>{{$price}} {{$currency}}</span>
                                @else
                                    <span>{{$currency}} {{$price}}</span>
                                @endif
                            </h3>
                        @endif

            </div>
            @if(!in_array($countryCode, ['AE', 'IN', 'SA']))
                @if($twoForOne && !in_array($countryCode, explode(',',$twoForOne->excluded_countries)))
                    @include('pages.product.parts.2for1')
                @endif
            @else
                <p class="gotham-bold red">{{__('order.form.shipping.free')}}</p>
            @endif
            <p class="gotham-bold">{{__('elixir.bottleLasts')}}</p>
            <a href="{{ url("order/beard-growth-elixir") }}"
               class="nav-order-button barbams-button font-heavy p-medium order-button a-button no-top-margin order-button-inverted">{{__('home.elixir.order')}}</a>
        </div>
        <div class="col-12 elixir-page-use text-center">
            @if(!in_array($countryCode, \App\Helpers\Helper::getBalkansCountries()))
                <div class="elixir-page-video col-12">
                    <video width="100%" controls poster="/video/elixir-how-to-use-it.png" playsinline>
                        <source src="/video/video_mob_optimised.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            @endif
        </div>
        <div class="col-12 elixir-page-results text-center">
            <h1>{{__('elixir.results')}}</h1>
            <p class="gotham-bold elix">{{__('elixir.firstResults')}}</p>

            <div id="results-gallery-mobile" class="results-gallery popup-gallery row">

                @php($countMob = 1)

                @foreach($carousel as $key => $data)

                    @if($countMob%2 == 1)
                        <div class="result-slider-item">
                            @endif
                            <a>
                                <img src="{{asset( $data['thumbnail'])}}"
                                     class="img-fluid">
                                <div class="image-info">
                                    <p class="gotham-bold">{{$data['title']}}</p>
                                </div>
                            </a>

                            @if($countMob%2 == 0)
                        </div>

                    @endif

                    @php($countMob++)

                @endforeach
            </div>
            @if($countMob%2 != 1)
        </div>
        @endif


        <div id="results-gallery-desktop" class="results-gallery popup-gallery row">
            @php($count = 1)

            @foreach($carousel as $key => $data)

                @if($count%3 == 1)
                    <div class="result-slider-item">
                        @endif
                        <a>
                            <img src="{{asset( $data['thumbnail'])}}"
                                 class="img-fluid">
                            <div class="image-info">
                                <p class="gotham-bold">{{$data['title']}}</p>
                            </div>
                        </a>
                        @if($count%3 == 0)
                    </div>
                @endif

                @php($count++)

            @endforeach
        </div>
        @if($count%3 != 1)
    </div>
    @endif
    <p class="margin-bottom-5"><a class="gotham-bold see-more" href="{{"/$language/about/results"}}">{{__('elixir.seeMoreResults')}}</a></p>

    <div class="col-12 elixir-page-use text-center">
        <h1>{{__('elixir.instructions')}}</h1>
        {{--                <h3 class="gotham-bold">{{__('elixir.firstResults')}}</h3>--}}
        <div class="elixir-page-video">
            <?php
            $lang = $language === 'ar' ? 'en' : $language;

            $src = $lang === 'en' ? 'https://www.youtube.com/embed/AsbtKadBcsk' : 'https://www.youtube.com/embed/FAWd_0RfoLM';
            ?>
            <iframe id="product-iframe" src="{{$src}}"
                    style="width: 100%;"></iframe>
        </div>
        <p>{{__('elixir.applied')}}</p>
        <p>{{__('elixir.dont')}}</p>
    </div>

    </div>
    </div>
@stop
@section('css')
    <link rel="stylesheet" type="text/css" href="{{asset('css/elixir.css')}}">
@stop
@section('pageSpecificScripts')
    <script src="{{asset('js/elixir.js')}}"></script>
    <script src="{{asset('js/gallery.js')}}"></script>
    <script src="{{asset('js/magnific-popup.js')}}"></script>

@stop
