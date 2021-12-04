<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;


    protected $fillable = [
        'email',
        'content',
    ];

    /*
     * Relation Article-Comment
    */
    public function article() {
        return $this->belongsToMany('App\Models\Article');
    }

    /*
     * Relation User-Comment
    */
    public function user() {
        return $this->belongsToMany('App\Models\User');
    }
}
