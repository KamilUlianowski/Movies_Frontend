"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movie_service_1 = require("../shared/movie.service");
var platform_browser_1 = require("@angular/platform-browser");
var login_service_1 = require("../../login/shared/login.service");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var MovieDetailsComponent = MovieDetailsComponent_1 = (function () {
    function MovieDetailsComponent(route, movieService, sanitizer, loginService, cookieService) {
        var _this = this;
        this.route = route;
        this.movieService = movieService;
        this.sanitizer = sanitizer;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.onRatingChange = function ($event) {
            _this.movieService.RateMovie(_this.user.login, $event.rating, _this.id).subscribe(function (response) { return _this.movie = response; });
            if (!!_this.userRate) {
                _this.userRate = $event.rating;
            }
            else {
                _this.movie.vote_count++;
                _this.userRate = $event.rating;
            }
            console.log('onRatingUpdated $event: ', $event);
            console.log(_this.loginService.user.first_name);
            // this.onRatingChangeResult = $event.rating;
            // this.movieService.RateMovie(this.)
        };
        this.selectedVideo = 0;
        this.rate = 7;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            MovieDetailsComponent_1.id = _this.id;
            _this.getUser();
        });
        this.getMovie();
        this.getMoreDetails();
        this.getVideos();
    };
    MovieDetailsComponent.prototype.getUser = function () {
        var _this = this;
        var login = this.cookieService.get('login');
        if (!!login) {
            this.loginService.getUserData(login).subscribe(function (response) {
                _this.user = response, _this.getMovieRate(response),
                    _this.toWatch = response.movieToWatch.filter(function (x) { return x == MovieDetailsComponent_1.id; }).length > 0;
            });
        }
    };
    MovieDetailsComponent.prototype.changeSelectedVideo = function (index) {
        this.selectedVideo = index;
    };
    MovieDetailsComponent.prototype.getMovieRate = function (response) {
        this.userRate = response.rated.filter(function (obj) {
            return obj.movieId == MovieDetailsComponent_1.id;
        }).map(function (x) { return x.rate; })[0];
    };
    MovieDetailsComponent.prototype.getMovie = function () {
        var _this = this;
        this.movieService.getMovie(this.id).subscribe(function (response) { return (_this.movie = response); });
    };
    MovieDetailsComponent.prototype.getVideos = function () {
        var _this = this;
        this.movieService.getVideos(this.id).subscribe(function (result) { return _this.getVideoKeys(result); });
    };
    MovieDetailsComponent.prototype.getMoreDetails = function () {
        var _this = this;
        this.movieService.getMovieDetails(this.id).subscribe(function (result) { return _this.movieMoreDetails = result; });
    };
    MovieDetailsComponent.prototype.getVideoKeys = function (result) {
        this.videoKeys = result.results.map(function (x) { return x.key; });
    };
    MovieDetailsComponent.prototype.getSecureUrl = function (videoKey) {
        if (!!videoKey) {
            return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoKey);
        }
    };
    MovieDetailsComponent.prototype.getVideoImage = function (videoKey) {
        return "https://img.youtube.com/vi/" + videoKey + "/0.jpg";
    };
    MovieDetailsComponent.prototype.addMovieToWatch = function () {
        var _this = this;
        this.movieService.addMovieToWatch(this.user.login, this.id).subscribe(function (response) {
            _this.user = response;
            _this.toWatch = true;
        });
    };
    MovieDetailsComponent.prototype.removeMovieFromWanted = function () {
        var _this = this;
        this.movieService.removeMovieFromWanted(this.user.login, this.id).subscribe(function (response) {
            _this.user = response;
            _this.toWatch = false;
        });
    };
    return MovieDetailsComponent;
}());
MovieDetailsComponent = MovieDetailsComponent_1 = __decorate([
    core_1.Component({
        selector: 'movie-details',
        templateUrl: 'app/movies/details/movie-detail.component.html'
    }),
    __param(1, core_1.Inject(movie_service_1.MovieService)),
    __param(3, core_1.Inject(login_service_1.LoginService)),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, movie_service_1.MovieService,
        platform_browser_1.DomSanitizer, login_service_1.LoginService,
        cookies_service_1.CookieService])
], MovieDetailsComponent);
exports.MovieDetailsComponent = MovieDetailsComponent;
var MovieDetailsComponent_1;
//# sourceMappingURL=movie.component.js.map