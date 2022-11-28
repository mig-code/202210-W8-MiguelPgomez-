import { getseries, tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesList } from '../movies.list/movies.list.js';

export class Movies extends Component {
    movies: Array<tvShowsType>;
    constructor(selector: string) {
        super();
        this.movies = getseries();
        this.manageComponent(selector);
        new MoviesList('.series-pending');
        new MoviesList('.series-watched');
    }
    manageComponent(selector: string) {
        this.template = this.createTemplate();
        this.render(selector);
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
