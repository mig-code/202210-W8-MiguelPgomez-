import { titleMovieLIst } from '../../helpers/functions.js';
import { tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesItem } from '../movies.item/item.js';

export class MoviesList extends Component {
    constructor(private selector: string, private movies: Array<tvShowsType>) {
        super();
        this.movies = movies;
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
        <h3 class="subsection-title">${titleMovieLIst(
            this.selector
        )} Series</h3>
        ${
            this.movies.length > 0
            ? `<p class="info">You have ${this.movies.length} series pending to watch</p>`
            : `NEED TO FIX THIS`
        }
        
        <ul class="series-list">
        </ul>
          
        `;
    }
}
