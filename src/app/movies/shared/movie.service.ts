import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { HttpModule, JsonpModule } from '@angular/http';
import { Movie } from '../details/movie'
import { AppSettings } from '../../app.settings'
import { User } from '../../users/details/user'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
    constructor(private http: Http) { }

    getMovies(page: number, term: string): Observable<any> {
        return this.http.get(AppSettings.API_URL + 'api/movies?page=' + page.toString() + "&term=" + term)
            .map(response => response.json() as any)
            .catch(this.handleError);
    }

    getMovie(id: number): Observable<Movie> {
        return this.http.get(AppSettings.API_URL + 'api/movies/' + id.toString())
            .map(response => response.json() as Movie)
            .catch(this.handleError);
    }

    getMoviesWithTrailers(): Observable<Movie[]> {
        return this.http.get(AppSettings.API_URL + 'api/movies?trailers=true')
            .map(response => response.json() as Movie[])
            .catch(this.handleError);
    }

    getMoviesToWatch(login: string): Observable<Movie[]> {
        return this.http.get(AppSettings.API_URL + 'api/users/watch?login=' + login)
            .map(response => response.json() as Movie[])
            .catch(this.handleError);
    }

    getBestMovies(): Observable<Movie[]> {
        return this.http.get(AppSettings.API_URL + 'api/movies/best')
            .map(response => response.json() as Movie[])
            .catch(this.handleError);
    }

    addMovieToWatch(login: string, movieId: number): Observable<User> {
        return this.http.post(AppSettings.API_URL + 'api/users/watch', {
            "login": login,
            "MovieToWatch": [movieId]
        }).map(response => response.json() as User)
            .catch(this.handleError);
    }

    removeMovieFromWanted(login: string, movieId: number): Observable<User> {
        return this.http.post(AppSettings.API_URL + 'api/users/watch/remove', {
            "login": login,
            "MovieToWatch": [movieId]
        }).map(response => response.json() as User)
            .catch(this.handleError);
    }


    getVideos(id: number): Observable<any> {
        return this.http.get(AppSettings.API_TMDB_URL + 'movie/' + id.toString() + '/videos?&' + AppSettings.TMDP_KEY)
            .map(response => response.json())
            .catch(this.handleError);
    }


    getMovieDetails(id: number): Observable<any> {
        return this.http.get(AppSettings.API_TMDB_URL + 'movie/' + id.toString() + '?&' + AppSettings.TMDP_KEY)
            .map(response => response.json())
            .catch(this.handleError);
    }

    RateMovie(login: string, rate: number, movieId: number): Observable<any> {
        return this.http.post(AppSettings.API_URL + 'api/movies', {
            "login": login,
            "rate": rate,
            "movieId": movieId
        })
            .map(response => response.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json().data;
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}