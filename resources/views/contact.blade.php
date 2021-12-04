<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <div>
                <form action="/contact" method="post" enctype="multipart/form-data">
                    @csrf

                    <label for="email">Email</label><br>
                    <input type="email" name="email" id="email"><br>
                    @error('email')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="firstName">First Name</label><br>
                    <input type="text" name="firstName" id="firstName"><br>
                    @error('firstName')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="name">Name</label><br>
                    <input type="text" name="name" id="name"><br>
                    @error('name')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="phone">Phone</label><br>
                    <input type="text" name="phone" id="phone"><br>
                    @error('phone')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="message">Message</label><br>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea><br>
                    @error('message')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </body>
</html>
