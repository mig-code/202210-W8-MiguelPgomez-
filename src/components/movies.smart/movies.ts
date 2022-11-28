import { filterByWatched, getFilmIdFromDom } from '../../helpers/functions.js';
import { moviesData, tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesList } from '../movies.list/movies.list.js';

export class Movies extends Component {
    movies: Array<tvShowsType>;
    addDeleteListeners() {
        const deleteButtons = document.querySelectorAll('.icon--delete');
        deleteButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.handleDelete(index);
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
        new MoviesList('.series-pending', filterByWatched(this.movies, false));
        new MoviesList('.series-watched', filterByWatched(this.movies, true));
        this.addDeleteListeners();
    }
    handleDelete(index: number) {
        console.log(index);
        console.log(getFilmIdFromDom(index));
        this.movies = this.movies.filter(
            (movie) => movie.name !== getFilmIdFromDom(index)
        );
        console.log('DELETING');
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
