@extends('layouts.main')
@section('title', 'Posts - Postgram')
@section('main-page')
<div class="wrapper">
    <div class="container" id="search-result-wrapper">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            @foreach (range(1, 10) as $i)
                <x-post.post/>
            @endforeach
        </div>
    </div>
</div>
@endsection
