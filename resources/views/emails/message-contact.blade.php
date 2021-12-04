<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body style="background: #e5e5e5; padding: 30px;" >

<div style="max-width: 320px; margin: 0 auto; padding: 20px; background: #fff;">
	<h3>Demande de contact depuis la plateforme de : <br> {{ $data['firstName'] }}  {{ $data['name'] }}</h3>
        <h6>Numéro de téléphone : {{ $data['phone'] }}</h6>
	<div>{{ $data['message'] }}</div>
</div>

</body>
</html>