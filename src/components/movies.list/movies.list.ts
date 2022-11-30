import { tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesItem } from '../movies.item/item.js';

export class MoviesList extends Component {
    infoTemplate = ``;
    constructor(
        private title: string,
        private selector: string,
        private movies: Array<tvShowsType>,
        private handleDelete: (event: string) => void,
        private handleRating: (rating: number, name: string) => void
    ) {
        super();
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
            new MoviesItem(
                '.series-list',
                selector,
                movie,
                this.movies,
                this.handleDelete.bind(this),
                this.handleRating.bind(this)
            );
        });
    }
    generateInfoTemplatePending() {
        if (this.movies.every((movie) => movie.watched === true)) {
            return `Congrats! You've watched all your series`;
        }
        if (this.movies.length > 0) {
            return `You have ${this.movies.length} series pending to watch`;
        }
        return '';
    }

    generateInfoTemplateWatched() {
        if (this.movies.every((movie) => movie.watched === false)) {
            return `You already have not watched any serie`;
        }
        if (this.movies.length > 0) {
            return `You have watched ${this.movies.length} series`;
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
