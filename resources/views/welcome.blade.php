<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Women Be Free - Make women free">
        <title>Women Be Free</title>
        <link href="{{secure_asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    </head>
    <body>
        <div id="root"></div>
        <script src="{{secure_asset('js/vendor.js')}}"></script>
        <script src="{{secure_asset('js/manifest.js')}}"></script>
        <script src="{{secure_asset('js/app.min.js')}}"></script>
    </body>
</html>