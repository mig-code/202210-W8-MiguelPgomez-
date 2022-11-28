import { getseries, tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';
import { MoviesItem } from '../movies.item/item.js';

export class MoviesList extends Component {
    movies: Array<tvShowsType>;

    constructor(private selector: string,) {
        super();
        this.movies = getseries();
      
        this.manageComponent(selector);
        console.log(this.movies);
        console.log(selector)
        
    }
    manageComponent(selector: string) {
        this.template = this.createTemplate();
        this.render(selector);
        this.movies.map((movie) => {
            new MoviesItem('.series-list',selector, movie);
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
