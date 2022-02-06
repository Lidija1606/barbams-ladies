@extends('layouts.about')

@section('meta_title', __('seo.meta_title_faq'))
@section('meta_description', __('seo.meta_description_faq'))
@section('content')
    <?php $count = 0; ?>
	<h1 class="text-center margin-top-0 margin-bottom-1">{{__('faq.title')}}</h1>
		@foreach($imagesData as $key => $data)
			<div class="flex-container">
					<div class="img-container">
						<img src="{{asset( $data['imagePath'])}}" class="" alt="{{__($data['question'])}}">
					</div>
				<div class="text-container" onclick="showFaq({{$key}})">
				<h3>{{__($data['question'])}}</h3>

					<div class="text-content">
						<p>{{__($data['answer'])}}</p>
					</div>
				</div>
			</div>
		<?php $count++; ?>
		@endforeach
	</div>
@stop