@extends('layouts.about')

@section('meta_title', __('seo.meta_title_crew'))
@section('meta_description', __('seo.meta_description_crew'))
@section('content')

	<div class="row team-page">
		<div class="col-12">
			<h1 class="text-center">{{__('crew.whoWeAre')}}</h1>
			<p class="text-center">
                {{__('crew.weAreGroup')}}<b>{{__('crew.megaBeardMen')}}</b>
            </p>
            <p class="text-center">
                {{__('crew.successful')}}<br>
                {{__('crew.everyDay')}}<br>
                {{__('crew.workFun')}}
            </p>
            <p class="text-center">
                {{__('crew.everything')}}
            </p>
            <p class="text-center">
                {{__('crew.oneMoreThing')}}
            </p>
            <p class="text-center">
                {{__('crew.havingBeard')}}<b>{{__('crew.alfaMale')}}</b><br>
                {{__('crew.ifYouManaged')}}
            </p>
		</div>
	</div>
@stop

@section('css')
    <link rel="stylesheet" type="text/css" href="{{asset('css/team.css')}}">
@stop
