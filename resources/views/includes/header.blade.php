{{--<header class="container">--}}
<header class="header-container">
	<div class="row">
		<a href="{{"/$language/home"}}" class="cursor">
			<div id="logo" class="col-4-ne"></div>
		</a>
		<div class="col-8-ne" id="hamburger">
			<a href="javascript:void(0);" onclick="navigationControl()">
				<img src="{{asset('img/menu.png')}}" id="menu-icon" alt="menu icon">
			</a>
		</div>
		<nav id="nav">
			{{--<div class="nav-wrapper">--}}
			<ul>
				<hr class="mobile-hr" />
				<li class="first"><a href="{{"/$language/home"}}">{{__('header.home')}} </a>
				</li>

				<li>
					<a href="{{"/$language/products/elixir"}}">{{__('header.barbams.elixir')}}</a>
				</li>
				<li>
					<a href="{{"/$language/about/results"}}">{{__('header.barbams.results')}}</a>
				</li>
				<li>
					<a href="{{"/$language/testimonials"}}">{{__('header.barbams.testimonials')}}</a>
				</li>
				<li>
					<a href="{{"/$language/about/faq"}}">{{__('header.barbams.faq')}}</a>
				</li>
				<li>
					<a href="{{"/$language/about/crew"}}">{{__('header.barbams.crew')}}</a>
				</li>

				{{--@if(in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN']))
					<li><a href="{{'/ar/about/contact'}}">{{__('header.barbams.contact')}}</a></li>
				@endif

				<li><a href="#"><span>{{__('header.barbams')}}</span></a>
					<ul class="menu-barbams">
						<li><a href="{{"/$language/about/crew"}}">{{__('header.barbams.crew')}}</a></li>
						<li><a href="{{"/$language/about/faq"}}">{{__('header.barbams.faq')}}</a></li>
						<li><a href="{{"/$language/about/results"}}">{{__('header.barbams.results')}}</a></li>
						@if(in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN']))
							<li><a href="{{'/ar/about/contact'}}">{{__('header.barbams.contact')}}</a></li>
						@endif
						<li><a href="#">{{__('header.barbams.video')}}</a></li>
					</ul>
				</li>--}}
				@if(\App\Helpers\Helper::getVisitorCountryCode() !== 'AL')
				<li class="language"><a href="#">{{__('header.language')}}<span></span></a>
					<ul class="menu-barbams">
						{{--<li><a href="{{route('lang.switch','en')}}"> Enlish </a></li>--}}
						{{--<li><a href="{{route('lang.switch','sr')}}"> Serbian </a></li>--}}
							@foreach(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
								<li>
									<a rel="alternate" hreflang="{{ $localeCode }}" class="lang-switcher" data-lang="{{$localeCode}}"
									   href="{{ \Mcamara\LaravelLocalization\Facades\LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
										{{ $properties['native'] }}
									</a>
								</li>
							@endforeach
						{{--<li><a href="{{url('/en')}}"> Enlish </a></li>--}}
						{{--<li><a href="{{url('/en')}} "> Serbian </a></li>--}}
					</ul>
				</li>
				@endif
				<li class="button-order">
					<a href="{{ url("order/beard-growth-elixir") }}"
					   class="nav-order-button barbams-button font-heavy p-medium order-button a-button no-top-margin order-button-inverted">{{__('home.elixir.order')}}</a>
				</li>
			</ul>
			{{--</div>--}}
		</nav>
	</div>
	@if(!in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']))
        <div class="marquee">{!! trans('header.marquee') !!}</div>
    @endif
</header>
