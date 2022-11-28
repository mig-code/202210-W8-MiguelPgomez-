
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
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
            </li>
          
        `;
    }
}
