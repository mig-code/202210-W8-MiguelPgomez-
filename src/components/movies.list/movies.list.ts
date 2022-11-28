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
         <h3 class="subsection-title">${this.selector}</h3>
            <p class="info">You have ${this.movies.length} series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          
        `;
    }
}
