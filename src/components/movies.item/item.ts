
import { generateScoreTemplate } from '../../helpers/stars.js';
import { tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';

export class MoviesItem extends Component {
    
    constructor(private selector: string, private section:string, private movie: tvShowsType) {
        super();
        this.movie=movie;
        this.section=section;
        this.manageComponent();
        console.log('load ITEM');
      
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.addRender(`${this.section} ${this.selector}`);
    }

    createTemplate() {
        return `
        <li class="serie">
            <img
                class="serie__poster"
                src="${this.movie.poster}"
                alt="${this.movie.name}"
            />
            <h4 class="serie__title">${this.movie.name}</h4>
            <p class="serie__info">${this.movie.creator} ${this.movie.year}</p>
            <ul class="score">
                ${generateScoreTemplate(this.movie.score)}
            </ul>
            <i class="fas fa-times-circle icon--delete"></i>
        </li>
          
        `;
    }
}
