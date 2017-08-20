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
var movie_service_1 = require("./shared/movie.service");
var MovieListComponent = (function () {
    function MovieListComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MovieListComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) { _this.movies = movies; });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movies-list',
        templateUrl: 'app/movies/movie-list.component.html'
    }),
    __param(0, core_1.Inject(movie_service_1.MovieService)),
    __metadata("design:paramtypes", [typeof (_a = typeof movie_service_1.MovieService !== "undefined" && movie_service_1.MovieService) === "function" && _a || Object])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
var _a;
//# sourceMappingURL=movie-list.component.js.map