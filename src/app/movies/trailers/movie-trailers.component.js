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
var movie_service_1 = require("../shared/movie.service");
var platform_browser_1 = require("@angular/platform-browser");
var MovieTrailersComponent = (function () {
    function MovieTrailersComponent(movieService, sanitizer) {
        this.movieService = movieService;
        this.sanitizer = sanitizer;
        this.movies = [];
    }
    MovieTrailersComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MovieTrailersComponent.prototype.getSecureUrl = function (movie) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + movie.video_key);
    };
    // getSecureUrl(): any {
    //   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XGSy3_Czz8k?playlist=XGSy3_Czz8k&loop=1");
    // }
    MovieTrailersComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMoviesWithTrailers().subscribe(function (movies) { _this.movies = movies; });
    };
    return MovieTrailersComponent;
}());
MovieTrailersComponent = __decorate([
    core_1.Component({
        selector: 'movies-trailers',
        templateUrl: 'app/movies/trailers/movie-trailers.component.html'
    }),
    __param(0, core_1.Inject(movie_service_1.MovieService)),
    __metadata("design:paramtypes", [movie_service_1.MovieService, platform_browser_1.DomSanitizer])
], MovieTrailersComponent);
exports.MovieTrailersComponent = MovieTrailersComponent;
//# sourceMappingURL=movie-trailers.component.js.map