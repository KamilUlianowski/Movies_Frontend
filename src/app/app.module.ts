import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { MovieListComponent } from './movies/movies-list/movie-list.component'
import { MoviesComponent } from './movies/movies.component'
import { MovieDetailsComponent } from './movies/details/movie.component'
import { MovieTrailersComponent } from './movies/trailers/movie-trailers.component'
import { LoginComponent } from './login/login.component'
import { MovieService } from './movies/shared/movie.service';
import { LoginService } from './login/shared/login.service';
import { appRoutes } from './routes'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Authentication } from './login/shared/authentication'
import { StarRatingModule } from 'angular-star-rating';
import { IStarRatingOnRatingChangeEven } from "angular-star-rating/src/star-rating-struct";
import { PagerService } from './shared/pager.service'
import { BestMoviesComponent } from './movies/best-movies/best-movies.component'
// import { Authentication } from './login/shared/authentication'
// import { Ionic2RatingModule } from 'ionic2-rating';
// import { RatingModule } from 'ngx-rating'


@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, CommonModule, StarRatingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, MovieListComponent, MoviesComponent, MovieDetailsComponent, MovieTrailersComponent,
    LoginComponent, BestMoviesComponent],
  providers: [LoginService, MovieService, Authentication, CookieService, PagerService],
  bootstrap: [AppComponent]
})


export class AppModule {


}
