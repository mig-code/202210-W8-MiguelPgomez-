import { filterByWatched, getFilmIdFromDom } from '../../helpers/functions.js';
import { moviesData, tvShowsType } from '../../models/tvshows.js';
import { MovieListOptionType } from '../../types/movie.List.Type.js';
import { Component } from '../component/component.js';
import { MoviesList } from '../movies.list/movies.list.js';

export class Movies extends Component {
    movies: Array<tvShowsType>;
    movieListOptions: Array<MovieListOptionType> = [];

    addDeleteListeners() {
        const deleteButtons = document.querySelectorAll('.icon--delete');
        deleteButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.handleDelete(index);
            });
        });
    }
    addStarsListeners() {
        const unWatchedItems = document.querySelectorAll(
            '.series-pending .score'
        );
        unWatchedItems.forEach((item, index) => {
            const stars = item.querySelectorAll('.score__star');
            stars.forEach((star, starIndex) => {
                star.addEventListener('click', () => {
                    this.handleRating(index, starIndex + 1);
                });
            });
        });
    }

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
                infoTemplate: this.generateInfoTemplatePending(),
            },
            {
                title: 'Watched',
                selector: '.series-watched',
                filterdMovies: filterByWatched(this.movies, true),
                infoTemplate: this.generateInfoTemplateWatched(),
            },
        ];
        this.movieListOptions.forEach((option) => {
            new MoviesList(
                option.title,
                option.selector,
                option.filterdMovies,
                option.infoTemplate
            );
            console.log(option.filterdMovies);
        });
        this.addDeleteListeners();
        this.addStarsListeners();

        //Old way
        // new MoviesList('.series-pending', filterByWatched(this.movies, false));
        // new MoviesList('.series-watched', filterByWatched(this.movies, true));
    }
    generateInfoTemplateWatched() {
        if (this.movies.every((movie) => movie.watched === false)) {
            return `You already have not watched any serie`;
        }
        if (filterByWatched(this.movies, true).length > 0) {
            return `You have watched ${
                filterByWatched(this.movies, true).length
            } series`;
        }
        return '';
    }
    generateInfoTemplatePending() {
        if (this.movies.every((movie) => movie.watched === true)) {
            return `Congrats! You've watched all your series`;
        }
        if (filterByWatched(this.movies, true).length > 0) {
            return `You have ${
                filterByWatched(this.movies, false).length
            }  series pending to watch`;
        }
        return '';
    }
    handleDelete(index: number) {
        this.movies = this.movies.filter(
            (movie) => movie.name !== getFilmIdFromDom(index)
        );
        console.log(this.movies);
        this.manageComponent(this.selector);
    }
    handleRating(index: number, rating: number) {
        console.log(index);
        console.log(rating);
        this.movies.map((movie) => {
            if (movie.name === getFilmIdFromDom(index)) {
                movie.score = rating;
                movie.watched = true;
                console.log('changed');
            }
        });

        this.manageComponent(this.selector);
    }

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
