import { Routes } from '@angular/router'
import { MoviesComponent } from './movies/movies.component'
import { LoginComponent } from './login/login.component'
import { Authentication } from './login/shared/authentication'
import { MovieDetailsComponent } from './movies/details/movie.component'
import { BestMoviesComponent } from './movies/best-movies/best-movies.component'

export const appRoutes: Routes = [
    { path: 'movies', component: MoviesComponent, canActivate: [Authentication] },
    { path: 'movies/best', component: BestMoviesComponent, canActivate: [Authentication] },
    { path: 'login', component: LoginComponent },
    { path: 'movies/details/:id', component: MovieDetailsComponent, canActivate: [Authentication] },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
]