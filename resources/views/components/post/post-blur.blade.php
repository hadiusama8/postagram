@section('style')
    <style>
        .wrapper{
            background: #232326;
        }
        .card{
            background: #232326;
            color: #b4b6b9;
        }
        .card p{
            font-size: 10px;
            font-weight: bold;
        }
        .card-small-row{
            padding-left: 0% !important;
        }

        .post-card .profile-name {
            position: absolute;
            left: 90px;
            bottom: 140px;
            font-size: 30px;
            color: #FFF;
            text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
            font-weight: bold;
            transition: all linear 0.25s;
            z-index: 99;
        }

        .post-card .profile-icons {
            position: absolute;
            bottom: 30px;
            right: 30px;
            color: #FFF;
            transition: all linear 0.25s;
        }
        .post-card .profile-pic {
            position: absolute;
            left: 20px;
            bottom: 125px;
            border-radius: 50%;
            width: 60px;
            z-index: 99;
        }

        .post-card .profile-username {
            position: absolute;
            bottom: 125px;
            left: 90px;
            color: #FFF;
            font-size: 13px;
            transition: all linear 0.25s;
            z-index: 99;
        }

        .post-card .profile-icons .fa {
            margin: 5px;
        }

        .post-card:hover img {
            filter: grayscale(100%);
        }

        .post-card:hover .profile-name {
            bottom: 130px;
        }

        .post-card:hover .profile-username {
            bottom: 115px;
        }

        .post-card:hover .profile-icons {
            right: 40px;
        }
        .card-small p {
            font-size: 9px;
            font-weight: normal;
        }
        .card-small .card-body {
            padding: 0.4rem 0rem;
        }
        .card-small h5 {
            font-size: 1em;
            font-weight: bold;
        }
        .card-body .card-text-white {
            color: white;
            display: inline;
        }
        .card-small {
            background: #2b2c30;
            border: 0px;
            padding-left: 0px;
        }
        img.background {
            position: absolute;
            z-index: -1;
            width: 105%;
            height: 105%;
            -webkit-filter: blur(10px); /* Safari 6.0 - 9.0 */
            filter: blur(5px);
            }
        img.circle {
            display: block;
            margin: 0 auto;
            }
        .mySwiper{
                height: 416px !important;
            }
    </style>
@endsection
<div class="col">
    <div class="card post-card h-100" style="border: 0px">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" class="profile-pic" alt="...">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <section class="swiper-slide" style=" width: 400px; !important;">
                    <img class="background" src="{{asset('img.jpg')}}" class="card-img-top" alt="...">
                    <img class="circle" src="{{asset('img.jpg')}}" class="card-img-top" alt="..." style="width: 300px; !important;margin: auto;">
                </section>
                <section class="swiper-slide" style="background-image: url('https://geocominstal.ro/wp-content/uploads/2018/11/blog-ph.jpg'); width: 400px; !important">
                    <img src="https://geocominstal.ro/wp-content/uploads/2018/11/blog-ph.jpg" class="card-img-top " alt="..." style="width: 320px; !important; margin: auto;">
                </section>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div class="profile-name">JOHN DOE</div>
        <div class="profile-username">@johndoesurname</div>
        <div class="card-body text-center">
            <p class="card-text d-inline">Posted On </p>
            <p class="card-text-white">October 23 2020 </p>
        </div>
        <div class="container-fluid px-0">
            <div class="row card-small-row text-center">
                <div class="col-sm-4 col-md-4">
                    <div class="card card-small">
                    <div class="card-body">
                        <h5 class="card-title">75</h5>
                        <p class="card-text">IMPRESSION</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="card card-small">
                    <div class="card-body">
                        <h5 class="card-title">595</h5>
                        <p class="card-text">REACH</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="card card-small">
                    <div class="card-body">
                        <h5 class="card-title">1%</h5>
                        <p class="card-text">ENGAGEMENT</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
