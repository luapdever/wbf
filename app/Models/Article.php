<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'project',
    ];



    /*
     * Relation User-Article
    */
    public function user() {
        return $this->belongsTo('App\Models\User');
    }


    /*
     * Relation Articke-Resource
    */
    public function resource() {
        return $this->hasMany('App\Models\Resource');
    }

    /*
     * Relation Article-Comment
    */
    public function comment()
    {
        return $this->hasMany('App\Models\Comment');
    }

    /*
     * Relation Article-Tag
    */
    public function tag() {
        return $this->belongsToMany('App\Models\Tag');
    }
}
