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
var pager_service_1 = require("../../shared/pager.service");
var MovieListComponent = (function () {
    function MovieListComponent(movieService, pagerService) {
        this.movieService = movieService;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
        this.movies = [];
        this.actualTerm = "";
    }
    MovieListComponent.prototype.ngOnInit = function () {
        this.getMovies(1);
        this.currentPage = 1;
    };
    MovieListComponent.prototype.getMovies = function (page) {
        var _this = this;
        this.movieService.getMovies(page, "").subscribe(function (response) {
            _this.movies = response.movies,
                _this.pagedItems = response.movies;
            _this.allItems = response.movies;
            _this.numberOfMovies = response.count;
            _this.setPage(page);
        });
    };
    MovieListComponent.prototype.getMoviesPagination = function (page) {
        var _this = this;
        this.movieService.getMovies(page, this.actualTerm).subscribe(function (response) {
            _this.movies = response.movies;
            _this.numberOfMovies = response.count;
            _this.pager = _this.pagerService.getPager(_this.numberOfMovies, page);
        });
    };
    MovieListComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.numberOfMovies, page);
        this.getMoviesPagination(page);
        // get current page of items
        // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return MovieListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MovieListComponent.prototype, "movieDetails", void 0);
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movies-list',
        templateUrl: 'app/movies/movies-list/movie-list.component.html'
    }),
    __param(0, core_1.Inject(movie_service_1.MovieService)),
    __param(1, core_1.Inject(pager_service_1.PagerService)),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        pager_service_1.PagerService])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map