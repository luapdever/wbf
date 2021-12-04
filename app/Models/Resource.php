<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
    ];


    /*
     * Relation Article-Resources
    */
    public function article() {
        return $this->belongsTo('App\Models\Article');
    }
}
