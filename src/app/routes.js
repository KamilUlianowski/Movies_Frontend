"use strict";
var movies_component_1 = require("./movies/movies.component");
var login_component_1 = require("./login/login.component");
var authentication_1 = require("./login/shared/authentication");
var movie_component_1 = require("./movies/details/movie.component");
var best_movies_component_1 = require("./movies/best-movies/best-movies.component");
exports.appRoutes = [
    { path: 'movies', component: movies_component_1.MoviesComponent, canActivate: [authentication_1.Authentication] },
    { path: 'movies/best', component: best_movies_component_1.BestMoviesComponent, canActivate: [authentication_1.Authentication] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'movies/details/:id', component: movie_component_1.MovieDetailsComponent, canActivate: [authentication_1.Authentication] },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map