import { Component, Inject, OnInit, Input } from '@angular/core'
import { MovieService } from '../shared/movie.service'
import { Movie } from '../details/Movie'
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { PagerService } from '../../shared/pager.service'

@Component({
    selector: 'movies-list',
    templateUrl: 'app/movies/movies-list/movie-list.component.html'
})
export class MovieListComponent implements OnInit {
    movies: Movie[];
    @Input() movieDetails: any;
    failMovies: Movie[];
    teststring: string;
    numberOfMovies: number;
    currentPage: number;
    actualTerm: string;
    constructor( @Inject(MovieService) private movieService: MovieService,
        @Inject(PagerService) private pagerService: PagerService) {
        this.movies = []
        this.actualTerm = "";
    }


    ngOnInit(): void {
        this.getMovies(1);
        this.currentPage = 1;
    }

    getMovies(page: number) {
        this.movieService.getMovies(page, "").subscribe(response => {
            this.movies = response.movies,
                this.pagedItems = response.movies
            this.allItems = response.movies
            this.numberOfMovies = response.count
            this.setPage(page)
        });
    }

    getMoviesPagination(page: number) {
        this.movieService.getMovies(page, this.actualTerm).subscribe(response => {
            this.movies = response.movies
            this.numberOfMovies = response.count
            this.pager = this.pagerService.getPager(this.numberOfMovies, page);
        });
    }

    private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.numberOfMovies, page);

        this.getMoviesPagination(page);
        // get current page of items
        // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}




