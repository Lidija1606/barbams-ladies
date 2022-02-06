@extends('layouts.about')
@section('meta_title', __('seo.meta_title_order_page'))
@section('meta_description', __('seo.meta_description_order_page'))
<script>
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if( (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf("Instagram") > -1)){
        var head = document.querySelector('head');
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/css/instagram.css';
        head.appendChild(link);
	}
</script>
@section('content')
	<?php
	if(Request::get('canceled')) { ?>
	<div style="display: none;" class="paymentMessage"><div style="text-align: center">
			<h3>{{ __('order.payment.decline') }}</h3>
			<h3>{{ __('order.payment.decline1') }}</h3>
			<h3>{{ __('order.payment.decline2') }}</h3>
		</div>
	</div>
	<div style="display: none" class="returnPage">{{ url('order/beard-growth-elixir') }}</div>
    <?php	}
	?>
	<h1 id="order-heading" class="text-center">{{__('order.heading')}} </h1>
	<h3 class="text-center margin-top-0  gotham-bold">{{__('order.please')}} </h3>
	<form name="orderForm" id="orderForm" class="barbams-input" action="" method="post"
	      onsubmit="return validate()"
	      id="Elixir">
		@if($specialPriceActive)
		<input type="hidden" name="special_price" value="<?php echo $specialPrice ?>">
		@endif
		<input type="hidden" name="old_price" value="<?php echo $oldPrice ?>">
		<input type="hidden" name="priceToBeDiscounted" value="<?php echo $price ?>">
		<div class="row">
			<div class="col-12 text-center margin-0">
				<input type="text" name="firstnameAndLastname" value="" class="full-width" placeholder="{{__('order.form.firstNameAndLastName')}}" autocomplete="nope">
				<p class="left form-error" id="firstnameAndLastname">{{__('order.form.error.firstName')}}</p>
				<input type="text" name="phone" value="{{ in_array(\App\Helpers\Helper::getVisitorCountryCode(), array_merge(['AE', 'IN', 'OTHER'], \App\Helpers\Helper::getBalkansCountries())) ? '' : '+' . $callingCode }}"  class="full-width" placeholder="{{__('order.form.phoneNumber')}}" autocomplete="nope">
				<p class="left form-error" id="phone" >{{__('order.form.error.phoneNumber')}}</p>
				<input type="text" name="email"  value=""  class="full-width" placeholder="{{__('order.form.email')}}" autocomplete="nope">
				<p class="left form-error" id="email">{{__('order.form.error.email')}}</p>
				<input type="text" name="address" value=""  class="full-width" placeholder="{{__('order.form.address')}} " autocomplete="nope">
				<p class="left form-error" id="address">{{__('order.form.error.address')}}</p>

				@if($countryCode === 'AE' || $countryCode === 'IN')
					<div class="select-list">
					<select style="width: 100%" name="city">
						@foreach($cities as $city)
							<option value="{{$city}}">{{$city}}</option>
						@endforeach
					</select>

					</div>
				@else
					<input type="text" name="city" value="" class="full-width" placeholder="{{__('order.form.city')}} " autocomplete="nope">
				@endif
				<p class="left form-error" id="city">{{__('order.form.error.city')}}</p>
				<input type="text" name="country" value=""  class="full-width" placeholder="{{__('order.form.country')}}" autocomplete="nope">
				<p class="left form-error" id="country">{{__('order.form.error.country')}}</p>

                @if(!in_array($countryCode, ['AE','SA']))
                    <input type="text" name="zip" value="" class="full-width"
                           placeholder="{{__('order.form.postalCode')}}" autocomplete="nope">
                    <p class="left form-error" id="zip">{{__('order.form.error.postalCode')}}</p>
                @endif
                <textarea rows="4" cols="50" name="note" value="" class="full-width" placeholder="{{__('order.form.note')}}"></textarea>
				<p class="left form-error" id="note">{{__('order.form.error.note')}}</p>
            </div>
        </div>
		@if($countryCode == 'US')
            <div class="row">
                <h3 class="text-center payment-details"  style="color: red">Unfortunatelly we don't deliver into your county for now.</h3>
            </div>
		@endif
		<div class="row ">
			<h1 class="text-center payment-details">{{__('order.paymentDetailsLabel')}} </h1>
		</div>
		<div class="row ">
				<div class="col-6-ne margin-0">
					<p class="gotham-bold margin-0">	{{__('order.form.amount')}}</p>
				</div>
						<div class="col-6-ne margin-0 quantity">
							<i class="arrow-i  right-i " id="dec-button"></i>
							<input type="number" name="quantity" value="1" class="nocursor" readonly="">
							<i class="arrow-i left-i" id="inc-button" ></i>
						</div>
		</div>


		<div class="row ">
				<div class="col-6-ne margin-0">
					<p class="left gotham-bold margin-0">{{__('order.form.paymentMethod')}} </p>
				</div>
			<div class="col-6-ne margin-0">
				<div class="payment-options {{ count($paymentTypes) < 2 ? 'one-payment' : '' }}">
					<i class="arrow-i  right-i {{ count($paymentTypes) < 2 ? 'hidden' : '' }}" id="arrow-payment-right"></i>
					<ul id="payment-options">
						<input type="hidden" name="paymentType" value="{{array_keys($paymentTypes)[0]}}"/>
						@foreach($paymentTypes as $typeId => $typeLabel)
							<li data-paymentId="{{$typeId}}">{{__($typeLabel)}}</li>
						@endforeach
					</ul>
					<i class="arrow-i left-i {{ count($paymentTypes) < 2 ? 'hidden' : '' }}" id="arrow-payment-left"></i>
				</div>
			</div>
		</div>
			@if($promoCodeActive)
			<div class="row" style="margin-top: 15px">
				<div class="col-12 margin-0">
					<input class="full-width margin-bottom-0" value="" type="text" name="promoCode" placeholder="{{__('order.form.promoCode')}} " />
				</div>
				<input type="hidden" value="" name="discount" />
				<div class="col-12">
					<p class="left form-error" id="promoCodeError">{{__('order.form.error.promocode')}}</p>
					<p class="left form-error" id="promoCodeSuccess">{{__('order.form.success.promocode')}}</p>
				</div>
			</div>
			@endif
			<div class="row" style="margin: 5% 0px;">
				<div class="old-price margin-bottom-0">
					@if($oldPriceActive)
						<h2> {{__('order.form.oldPrice')}}
							@if($region != 'AS')
								<span>{{$oldPrice}} {{$currency}}</span>
							@else
								<span>{{$currency}} {{$oldPrice}}</span>
							@endif
						</h2>
					@endif
				</div>
				<div class="price-block margin-top-0 margin-bottom-0">
					<div id="price-data" data-value = "{{$price}} {{$currency}}">
						<h2>
                                {{__('order.form.price')}}
									@if($region != 'AS')
										<span>{{$price}} {{$currency}}</span>
									@else
										<span>{{$currency}} {{$price}} </span>
									@endif
							</h2>
					</div>
					@if($timer && !in_array($countryCode, explode(',',$timer->excluded_countries)))
						<div class="timer-wrapper"  data-timer="{{$timer->value}}"></div>
					@endif
					@if($elixirCounter && !in_array($countryCode, explode(',',$elixirCounter->excluded_countries)))
						@include('pages.product.parts.countdown_elixir')
					@endif
					<input type="hidden" id="price" name="price" value="{{$price}} {{$currency}}"
						   readonly=""
						   data-price="{{$price}}"
						   @if (env('APP_ENV')=='local')
						   data-session-id="123"
						   @else
						   data-session-id="{{$sessionId}}"
						   @endif
								   data-lang="{{$language}}"
						   data-price-id="{{$productPriceId}}"
						   data-currency="{{$currency}}"
						   data-shipping="{{$shipping}}"
						   data-country="{{$countryCode}}"
					>
				</div>
			</div>
			<div class="row">
				<div class="order-shipping margin-bottom-0">
					@if($twoForOne && !in_array($countryCode, explode(',',$twoForOne->excluded_countries)))
						@include('pages.product.parts.2for1')
					@endif
					@if(!in_array($countryCode, array_merge(\App\Helpers\Helper::getBalkansCountries(), ['HR']), true))
						<p class="margin-top-0 gotham-bold text-center">{{__('order.form.shipping.free')}}</p>
						<p class="margin-top-0 quantity-discount gotham-bold text-center" style="display: none">
							*{{__('order.form.discount.quantity')}}*</p>
					@else
						@if($countryCode === 'ME')
							<p class="margin-top-0 gotham-bold text-center">{{__('order.form.shipping.me')}} </br>{{__('order.form.shipping.montenegro_PG')}} </br> {{__('order.form.shipping.montenegro_ostali')}} </p>
						@else
							<p class="margin-top-0 gotham-bold text-center">{{__('order.form.shipping',['shipping'=>$shipping, 'currency'=>$currency])}}</p>
						@endif
					@endif
				</div>
			</div>
		<div class="row">
			<div class="duration-info gotham-bold">
				<p class="gotham-bold">{{__('order.deliveryInfo')}} <br/>
			{{__('order.deliveryInfoDays',['shipping_time' => $shippingTime])}}</p>

			</div>
		</div>
		<div class="row ord-b">
            @if(in_array($countryCode, ['NO', 'UK', 'LU']))
				<p class="form-error text-center" style="display: block">Unfortunately We Don't Deliver In Your Country, For Now. </p>
			@else
				<p class="form-error text-center" id="error"></p>
				<button type="submit" class="barbams-button btn-order"> {{__('order.form.order')}}</button>
			@endif
		</div>
	</form>@stop
@section('pageSpecificScripts')
 	<script src="{{mix('js/order.js')}}"></script>
	@if($timer && !in_array($countryCode, explode(',',$timer->excluded_countries)))
 	<script src="{{mix('js/timer.js')}}"></script>
    @endif
@stop
