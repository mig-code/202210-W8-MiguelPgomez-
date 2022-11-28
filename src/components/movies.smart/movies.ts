import { filterByWatched } from '../../helpers/functions.js';
import { moviesData, tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesList } from '../movies.list/movies.list.js';

export class Movies extends Component {
    movies: Array<tvShowsType>;
    addDeleteListener() {
        const deleteButtons = document.querySelectorAll('.icon--delete');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', () => {
                console.log('delete');
            });
        });
    }

    constructor(selector: string) {
        super();
        this.movies = moviesData;
        this.manageComponent(selector);
        new MoviesList('.series-pending', filterByWatched(this.movies, false));
        new MoviesList('.series-watched', filterByWatched(this.movies, true));
        this.addDeleteListener();
    }
    manageComponent(selector: string) {
        this.template = this.createTemplate();
        this.render(selector);
    }
    hadleDelete() {
        console.log('delete');
    }

    createTemplate() {
        return `
        <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending">PENDING</section>
            <section class="series-watched">WATCH</section>
        </section>
        `;
    }
}
