@extends('layouts.about')
@section('content')

	<h1 class="text-center noselect">PROIZVODI</h1>
	<div class="row">
		<div class="col-4">
			<div class="product"><img src="{{asset('img/elixir.png')}}" onclick="{{'/products/elixir'}}" alt="Elixir za Bradu"
			                          class="radius15-shadow">
				<h3>Elixir za Bradu</h3>
				<p>Barbams Beard Elixir je eliksir za rast nove i jačanje postojeće brade. </p>
				<div>
					<a class="a-button float-left margin-right-10" href="{{'/products/elixir'}}">Više...</a>


					<button class="barbams-button order-button a-button no-top-margin"
					        onclick="window.location='{{ url("order/beard-growth-elixir") }}'">Poruči
					</button>

				</div>
			</div>
		</div>
		{{--<div class="col-4">--}}
		{{--<div class="product"><img src="{{asset('img/eyebrows.png')}}" alt="Eliksir za obrve" class="radius15-shadow"--}}
		{{--onclick="location.href='eyebrows.php';">--}}
		{{--<h3>Eliksir za obrve</h3>--}}
		{{--<p>Eliksir koji ce uciniti Vase obrve jakim i gustim...</p>--}}
		{{--<div>--}}
		{{--<a class="a-button float-left margin-right-10" href="eyebrows.php">Više,,,</a>--}}
		{{--<form action="order.php" method="post">--}}
		{{--<input type="hidden" name="product" value="9">--}}
		{{--<button class="barbams-button order-button a-button no-top-margin">Poruči</button>--}}
		{{--</form>--}}
		{{--</div>--}}
		{{--</div>--}}
		{{--</div>--}}
	</div>

@stop

@section('pageSpecificScripts')
	<script src="{{asset('js/elixir.js?v=2')}}"></script>
@stop