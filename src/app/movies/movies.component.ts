import { Component, Inject, OnInit } from '@angular/core'
import { MovieService } from './shared/movie.service'
import { Movie } from './details/Movie'
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/shared/login.service'
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'movies',
    templateUrl: 'app/movies/movies.component.html'
})

export class MoviesComponent{
    constructor(private loginService: LoginService) { }
}




