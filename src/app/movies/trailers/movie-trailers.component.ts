import { Component, Inject, Input, OnInit } from '@angular/core'
import { MovieService } from '../shared/movie.service'
import { Movie } from '../details/Movie'
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'movies-trailers',
  templateUrl: 'app/movies/trailers/movie-trailers.component.html'

})
export class MovieTrailersComponent {
  movies: Movie[]

  constructor( @Inject(MovieService) private movieService: MovieService, private sanitizer: DomSanitizer) {
    this.movies = []
  }


  ngOnInit(): void {
    this.getMovies();
  }

  getSecureUrl(movie: Movie): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + movie.video_key);
  }

  // getSecureUrl(): any {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XGSy3_Czz8k?playlist=XGSy3_Czz8k&loop=1");
  // }

  getMovies() {
    this.movieService.getMoviesWithTrailers().subscribe(movies => { this.movies = movies; });
  }
}
