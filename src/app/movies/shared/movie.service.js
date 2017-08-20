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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_settings_1 = require("../../app.settings");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function (page, term) {
        return this.http.get(app_settings_1.AppSettings.API_URL + 'api/movies?page=' + page.toString() + "&term=" + term)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovie = function (id) {
        return this.http.get(app_settings_1.AppSettings.API_URL + 'api/movies/' + id.toString())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMoviesWithTrailers = function () {
        return this.http.get(app_settings_1.AppSettings.API_URL + 'api/movies?trailers=true')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMoviesToWatch = function (login) {
        return this.http.get(app_settings_1.AppSettings.API_URL + 'api/users/watch?login=' + login)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getBestMovies = function () {
        return this.http.get(app_settings_1.AppSettings.API_URL + 'api/movies/best')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.addMovieToWatch = function (login, movieId) {
        return this.http.post(app_settings_1.AppSettings.API_URL + 'api/users/watch', {
            "login": login,
            "MovieToWatch": [movieId]
        }).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.removeMovieFromWanted = function (login, movieId) {
        return this.http.post(app_settings_1.AppSettings.API_URL + 'api/users/watch/remove', {
            "login": login,
            "MovieToWatch": [movieId]
        }).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getVideos = function (id) {
        return this.http.get(app_settings_1.AppSettings.API_TMDB_URL + 'movie/' + id.toString() + '/videos?&' + app_settings_1.AppSettings.TMDP_KEY)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieDetails = function (id) {
        return this.http.get(app_settings_1.AppSettings.API_TMDB_URL + 'movie/' + id.toString() + '?&' + app_settings_1.AppSettings.TMDP_KEY)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.RateMovie = function (login, rate, movieId) {
        return this.http.post(app_settings_1.AppSettings.API_URL + 'api/movies', {
            "login": login,
            "rate": rate,
            "movieId": movieId
        })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.extractData = function (res) {
        var body = res.json().data;
        return body || {};
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map