<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    @include('includes.head')
    <meta name="google-site-verification" content="j0dHAe69Tc3FD-YDetHg0MlDuJCZrUENTd_86NbO-yQ" />
</head>
<body>
@include('includes.gtm')
<div class="wrapper">
    {{--<header class="container">--}}
        @include('includes.header')
    {{--</header>--}}

    <div class="container product-single first">
        @yield('content')
    </div>
    <footer class="row footer text-center">
        @include('includes.footer')
    </footer>
    @yield('pageSpecificScripts')
</div>
</body>
</html>
