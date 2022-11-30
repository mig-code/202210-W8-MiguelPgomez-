import { filterByWatched } from '../../helpers/functions.js';
import { moviesData, tvShowsType } from '../../models/tvshows.js';
import { MovieListOptionType } from '../../types/movie.List.Type.js';
import { Component } from '../component/component.js';
import { MoviesList } from '../movies.list/movies.list.js';

export class Movies extends Component {
    movies: Array<tvShowsType>;
    movieListOptions: Array<MovieListOptionType> = [];

    constructor(private selector: string) {
        super();
        this.movies = moviesData;
        this.manageComponent(selector);
    }
    manageComponent(selector: string) {
        this.template = this.createTemplate();
        this.render(selector);
        this.movieListOptions = [
            {
                title: 'Pending',
                selector: '.series-pending',
                filterdMovies: filterByWatched(this.movies, false),
            },
            {
                title: 'Watched',
                selector: '.series-watched',
                filterdMovies: filterByWatched(this.movies, true),
            },
        ];
        this.movieListOptions.forEach((option) => {
            new MoviesList(
                option.title,
                option.selector,
                option.filterdMovies,
                // this.movies,
                this.handleDeleteInItem.bind(this),
                this.handleRatingInItem.bind(this)
            );
        });
    }
    handleDeleteInItem(event: string) {
        this.movies = this.movies.filter((movie) => movie.name !== event);
        this.manageComponent(this.selector);
    }
    handleRatingInItem(rating: number, name: string) {
        {
            this.movies.map((movie) => {
                if (movie.name === name) {
                    movie.score = rating;
                    movie.watched = true;
                }
            });
            this.manageComponent(this.selector);
        }
    }

    // OLD WAY TO HANDLE DELETE AND RATING IN THIS COMPONENT

    // handleDelete(index: number) {
    //     this.movies = this.movies.filter(
    //         (movie) => movie.name !== getFilmIdFromDom(index)
    //     );
    //     this.manageComponent(this.selector);
    // }
    // addDeleteListeners() {
    //     const deleteButtons = document.querySelectorAll('.icon--delete');
    //     deleteButtons.forEach((button, index) => {
    //         button.addEventListener('click', () => {
    //             this.handleDelete(index);
    //         });
    //     });
    // }

    // handleRating(index: number, rating: number) {
    //     this.movies.map((movie) => {
    //         if (movie.name === getFilmIdFromDom(index)) {
    //             movie.score = rating;
    //             movie.watched = true;
    //         }
    //     });

    //     this.manageComponent(this.selector);
    // }
    // addStarsListeners() {
    //     const unWatchedItems = document.querySelectorAll(
    //         '.series-pending .score'
    //     );
    //     unWatchedItems.forEach((item, index) => {
    //         const stars = item.querySelectorAll('.score__star');
    //         stars.forEach((star, starIndex) => {
    //             star.addEventListener('click', () => {
    //                 this.handleRating(index, starIndex + 1);
    //             });
    //         });
    //     });
    // }

    createTemplate() {
        return `
        <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending"></section>
            <section class="series-watched"></section>
        </section>
        `;
    }
}
