import { Component, Inject, OnInit } from '@angular/core'
import { MovieService } from '../shared/movie.service'
import { Movie } from '../details/Movie'
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { StarRatingModule } from 'angular-star-rating';
@Component({
    selector: 'best-movies',
    templateUrl: 'app/movies/best-movies/best-movies.component.html'
})

export class BestMoviesComponent implements OnInit {

    movies: Movie[]

    constructor( @Inject(MovieService) private movieService: MovieService, private cookieService: CookieService) {

    }

    ngOnInit(): void {
        this.getMovies();
    }

    getMovies() {
        this.movieService.getBestMovies().subscribe(
            response => this.movies = response
        )
    }

}




