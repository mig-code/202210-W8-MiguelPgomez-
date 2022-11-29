import { tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesItem } from '../movies.item/item.js';

export class MoviesList extends Component {
    constructor(
        private title: string,
        private selector: string,
        private movies: Array<tvShowsType>,
        private info: string
    ) {
        super();
        this.title = title;
        this.movies = movies;
        this.info = info;
        this.manageComponent(selector);
    }
    manageComponent(selector: string) {
        this.template = this.createTemplate();
        this.render(selector);
        this.movies.map((movie) => {
            new MoviesItem('.series-list', selector, movie);
        });
    }

    createTemplate() {
        return `
        <h3 class="subsection-title">${this.title} Series</h3>
            <p class="info">${this.info}</p>
        <ul class="series-list">
        </ul>   
        `;
    }
}
