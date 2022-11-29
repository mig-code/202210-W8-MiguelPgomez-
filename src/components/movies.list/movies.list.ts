import { tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesItem } from '../movies.item/item.js';

export class MoviesList extends Component {
    infoTemplate = ``;
    constructor(
        private title: string,
        private selector: string,
        private movies: Array<tvShowsType>
    ) {
        super();
        this.title = title;
        this.selector = selector;
        this.movies = movies;

        this.manageComponent(selector);
    }
    manageComponent(selector: string) {
        if (this.selector === '.series-pending') {
            this.infoTemplate = this.generateInfoTemplatePending();
        }
        if (this.selector === '.series-watched') {
            this.infoTemplate = this.generateInfoTemplateWatched();
        }
        this.template = this.createTemplate();
        this.render(selector);
        this.movies.map((movie) => {
            new MoviesItem('.series-list', selector, movie);
        });
    }
    generateInfoTemplateWatched() {
        if (this.movies.every((movie) => movie.watched === false)) {
            return `You already have not watched any serie`;
        }
        if (this.movies.length > 0) {
            return `You have ${this.movies.length}  series pending to watch`;
        }
        return '';
    }
    generateInfoTemplatePending() {
        if (this.movies.every((movie) => movie.watched === true)) {
            return `Congrats! You've watched all your series`;
        }
        if (this.movies.length > 0) {
            return `You have ${this.movies.length}  series pending to watch`;
        }
        return '';
    }

    createTemplate() {
        return `
        <h3 class="subsection-title">${this.title} Series</h3>
            <p class="info">${this.infoTemplate}</p>
        <ul class="series-list">
        </ul>   
        `;
    }
}
