<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    
    return view('test');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/posts', function () {
        return Inertia::render('Posts');
    })->name('posts');
    Route::get('/pages', function () {
        return Inertia::render('Pages');
    })->name('pages');
    Route::get('/media', function () {
        return Inertia::render('Media');
    })->name('media');
    Route::get('/comments', function () {
        return Inertia::render('Comments');
    })->name('comments');
});



require __DIR__ . '/auth.php';
