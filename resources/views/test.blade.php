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
                <form action="{{ route('articles.store') }}" method="post" enctype="multipart/form-data">
                    @csrf

                    <label for="title">Title</label><br>
                    <input type="text" name="title" id="title"><br>
                    @error('title')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>
                    
                    <label for="content">Content</label><br>
                    <textarea name="content" id="content" cols="30" rows="10"></textarea><br>
                    @error('content')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <input type="radio" name="project" id="project"> <label for="project">Is Project</label><br><br>
                    @error('project')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="image">Image</label><br>
                    <input type="file" name="image" id="image"><br>
                    @error('image')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="resources">Resources</label><br>
                    <input type="file" multiple name="resources[]" id="resources"><br>
                    @error('resources')
                        <span class="form-control-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span><br>
                    @enderror
                    <br>

                    <label for="tags">Tags</label><br>
                    <select name="tags[]" id="tags" multiple>
                        <option value="oklm">oklm</option>
                        <option value="nice">nice</option>
                        <option value="great">great</option>
                        <option value="never">never</option>
                    </select>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </body>
</html>
