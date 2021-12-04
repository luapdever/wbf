<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Requests\StoreArticleRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;
use App\Http\Resources\Article as ArticleResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request()->isProject) {
            return ArticleResource::collection(Article::where('project', true)->paginate(9));
        } else {
            return ArticleResource::collection(Article::where('project', false)->paginate(9));
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArticleRequest $request)
    {
        $this->authorize('create', 'App\Models\Article');

        //store article's image
        $path_image = moveFile($request->image, 'uploads/articles/images');

        $article = Auth::user()->article()->create([
            'image' => $path_image,
            'title' => $request->title,
            'content' => $request->content,
            'project' => $request->project ? true : false
        ]);

        //store article's resources
        $this->saveResources($article, $request->resources);

        //store article's tags
        $this->saveTags($article, $request->tags);

        return new ArticleResource($article);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return new ArticleResource($article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(StoreArticleRequest $request, Article $article)
    {
        $this->authorize('update', $article);
        
        //store article's image
        if($request->image) {
            $path_image = rewriteFile($request->image, 'uploads/articles/images', $article->photo);
        }

        $article_updated = $article->update([
            'image' => $path_image,
            'title' => $request->title,
            'content' => $request->content,
            'project' => $request->project ? true : false
        ]);

        //store article's resources
        if($request->resources) {
            $this->saveResources($article_updated, $request->resources);
        }

        //store article's tags
        if($request->tags) {
            $this->saveTags($article_updated, $request->tags);
        }

        return new ArticleResource($article_updated);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //$this->authorize('delete', $article);

        $paths = $article->resource()->get();

        if(!deleteFile($article->image)) {
            return response()->json(['message' => 'Image deleting failed'] , 500);
        }

        foreach($paths as $path)
        {
            if(!deleteFile($path->path))
            {
                return response()->json(['message' => 'Files deleting failed'] , 500);
            }
        }
        if(!$this->deleteArticle($article))
        {
            return response()->noContent(Response::HTTP_BAD_REQUEST);
        }
        return response()->json(['message' => 'Article deleted'] , 200);
    }


    /*
        Function of resources storage
    */
    private function saveResources($article, $resources) {
        if(!empty($resources) && is_array($resources)) {
            foreach ($resources as $resource) {
                $path = moveFile($resource, 'uploads/articles/resources');
                $article->resource()->create([
                    'path' => $path,
                ]);
            }
        }
    }


    /*
        Function of tags handle
    */
    private function saveTags($article, $tags) {
        if(!empty($tags) && is_array($tags)) {
            $tags_array = array();
            foreach ($tags as $tag) {
                array_push(
                    $tags_array,
                    Tag::firstOrCreate([
                        'label' => $tag,
                    ])->id
                );

            }
            if(count($tags_array) > 0) {
                $article->tag()->sync($tags_array);
            }
        }
    }

    /*
        Function of article deleting from database
    */
    private function deleteArticle($article) {
        if($article->tag()->detach() && $article->resource()->delete() && $article->comment()->delete() && $article->delete()) {
            return true;
        }
        return false;
    }

}
