"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var movie_list_component_1 = require("./movies/movies-list/movie-list.component");
var movies_component_1 = require("./movies/movies.component");
var movie_component_1 = require("./movies/details/movie.component");
var movie_trailers_component_1 = require("./movies/trailers/movie-trailers.component");
var login_component_1 = require("./login/login.component");
var movie_service_1 = require("./movies/shared/movie.service");
var login_service_1 = require("./login/shared/login.service");
var routes_1 = require("./routes");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var authentication_1 = require("./login/shared/authentication");
var angular_star_rating_1 = require("angular-star-rating");
var pager_service_1 = require("./shared/pager.service");
var best_movies_component_1 = require("./movies/best-movies/best-movies.component");
// import { Authentication } from './login/shared/authentication'
// import { Ionic2RatingModule } from 'ionic2-rating';
// import { RatingModule } from 'ngx-rating'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, common_1.CommonModule, angular_star_rating_1.StarRatingModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [app_component_1.AppComponent, movie_list_component_1.MovieListComponent, movies_component_1.MoviesComponent, movie_component_1.MovieDetailsComponent, movie_trailers_component_1.MovieTrailersComponent,
            login_component_1.LoginComponent, best_movies_component_1.BestMoviesComponent],
        providers: [login_service_1.LoginService, movie_service_1.MovieService, authentication_1.Authentication, cookies_service_1.CookieService, pager_service_1.PagerService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map