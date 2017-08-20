import { Component, Inject, Input, OnInit } from '@angular/core'
import { Movie } from './movie'
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import { StarRatingModule } from 'angular-star-rating';

import { IStarRatingOnRatingChangeEven } from "angular-star-rating/src/star-rating-struct";
import { LoginService } from '../../login/shared/login.service'
import { User } from '../../users/details/user'
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Component({
  selector: 'movie-details',
  templateUrl: 'app/movies/details/movie-detail.component.html'
})

export class MovieDetailsComponent implements OnInit {
  public static id: number;
  rate: any;
  id: number;
  private sub: any;
  movie: Movie;
  videoKeys: any;
  movieMoreDetails: any;
  selectedVideo: number
  user: User
  userRate: number;
  toWatch: boolean
  private onRatingChangeResult: IStarRatingOnRatingChangeEven

  constructor(private route: ActivatedRoute, @Inject(MovieService) private movieService: MovieService,
    private sanitizer: DomSanitizer, @Inject(LoginService) private loginService: LoginService,
    private cookieService: CookieService) {
    this.selectedVideo = 0;
    this.rate = 7;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      MovieDetailsComponent.id = this.id;
      this.getUser();
    });
    this.getMovie();
    this.getMoreDetails();
    this.getVideos();
  }

  getUser() {
    var login = this.cookieService.get('login')
    if (!!login) {
      this.loginService.getUserData(login).subscribe(
        (response) => {
          this.user = response, this.getMovieRate(response),
            this.toWatch = response.movieToWatch.filter((x: any) => x == MovieDetailsComponent.id).length > 0
        }
      )
    }
  }

  changeSelectedVideo(index: number) {
    this.selectedVideo = index;
  }

  getMovieRate(response: User) {
    this.userRate = response.rated.filter(function (obj: any) {
      return obj.movieId == MovieDetailsComponent.id;
    }).map((x: any) => x.rate)[0]
  }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe(
      response => (this.movie = response));
  }

  getVideos() {
    this.movieService.getVideos(this.id).subscribe(
      result => this.getVideoKeys(result));
  }

  getMoreDetails() {
    this.movieService.getMovieDetails(this.id).subscribe(
      result => this.movieMoreDetails = result);
  }

  getVideoKeys(result: any) {
    this.videoKeys = result.results.map((x: any) => x.key)
  }

  getSecureUrl(videoKey: string): any {
    if (!!videoKey) {
      return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoKey);
    }
  }

  getVideoImage(videoKey: string): any {
    return "https://img.youtube.com/vi/" + videoKey + "/0.jpg"
  }

  onRatingChange = ($event: IStarRatingOnRatingChangeEven) => {
    this.movieService.RateMovie(this.user.login, $event.rating, this.id).subscribe(
      response => this.movie = response
    )
    if (!!this.userRate) {
      this.userRate = $event.rating
    }
    else {
      this.movie.vote_count++;
      this.userRate = $event.rating

    }

    console.log('onRatingUpdated $event: ', $event);
    console.log(this.loginService.user.first_name);
    // this.onRatingChangeResult = $event.rating;
    // this.movieService.RateMovie(this.)
  };

  addMovieToWatch() {
    this.movieService.addMovieToWatch(this.user.login, this.id).subscribe(
      response => {
        this.user = response
        this.toWatch = true;
      }
    )
  }

  removeMovieFromWanted() {
    this.movieService.removeMovieFromWanted(this.user.login, this.id).subscribe(
      response => {
        this.user = response
        this.toWatch = false;
      }
    )
  }


}
