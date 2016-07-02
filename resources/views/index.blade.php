<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Home &mdash; Jeremy Sarda</title>

	<!-- PWA Manifest -->
	<link rel="manifest" href="manifest.json">

	<!-- Icon Variations -->
	<link rel="shortcut icon" href="/img/icons/favicon.ico" type="image/x-icon"/>
	<link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/img/icons/favicon-16x16.png" sizes="16x16">
	<link rel="icon" type="image/png" href="/img/icons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/img/icons/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/img/icons/android-chrome-192x192.png" sizes="192x192">
	<meta name="msapplication-square70x70logo" content="/img/icons/smalltile.png"/>
	<meta name="msapplication-square150x150logo" content="/img/icons/mediumtile.png"/>
	<meta name="msapplication-wide310x150logo" content="/img/icons/widetile.png"/>
	<meta name="msapplication-square310x310logo" content="/img/icons/largetile.png"/>

	<!-- Critical CSS (Applied Immediately) -->
	<style type="text/css"><?php require( app_path("../angular/critical.css") ) ?></style>

	<!--[if lte IE 10]>
	<script type="text/javascript">document.location.href = '/unsupported-browser'</script>
	<![endif]-->
</head>
<body>

<app-shell>
	<div id="app-shell-header">
		<img src="img/icons/logo.svg" width="171" height="41">
	</div>
	<div id="app-shell-content"></div>
</app-shell>

<app-view></app-view>


<script async defer>
	(function (link) {
		link = document.createElement("link");
		link.href = "{!! elixir('css/final.css') !!}";
		link.type = "text/css";
		link.rel = "stylesheet";
		document.body.appendChild(link);
	})();
</script>

<script src="{!! elixir('js/final.js') !!}" async defer></script>

</body>
</html>
