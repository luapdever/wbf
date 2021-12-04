<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
    ];


    /*
     * Relation Article-Tag
    */
    public function article() {
        return $this->belongsToMany('App\Models\Article');
    }
}
