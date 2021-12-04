<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;

class StoreArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => ['nullable', Rule::requiredIf(Route::is('articles.store')), 'image', 'max:8024'],
            'resources.*' => ['nullable', 'file', 'mimes:pdf,jpg,jpeg,png'],
            'tags.*' => ['nullable', 'string'],
        ];
    }
}
