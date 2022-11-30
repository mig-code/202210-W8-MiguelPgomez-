import { filterByWatched } from '../../helpers/functions.js';
import { generateScoreTemplate } from '../../helpers/stars.js';
import { tvShowsType } from '../../models/tvshows.js';
import { Component } from '../component/component.js';

export class MoviesItem extends Component {
    constructor(
        private selector: string,
        private section: string,
        private movie: tvShowsType,
        private index: number,
        private movies: Array<tvShowsType>,
        private allMovies: Array<tvShowsType>,
        private handleDelete: (event: string) => void,
        private handleRating: (rating: number, name: string) => void
    ) {
        super();
        this.movie = movie;
        this.section = section;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.addRender(`${this.section} ${this.selector}`);
        this.addEventListeners();
        this.addRatingListener();
        // console.log(this.section, this.selector);
    }

    //TRY TO DO ADDING PROPS A TOPE

    addEventListeners() {
        const deleteButton = document.querySelectorAll(
            `${this.section} .icon--delete`
        );
        deleteButton.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (this.section === '.series-pending') {
                    this.handleDelete(
                        filterByWatched(this.movies, false)[index].name
                    );
                }
                if (this.section === '.series-watched') {
                    this.handleDelete(
                        filterByWatched(this.movies, true)[index].name
                    );
                }
            });
        });
    }
    addRatingListener() {
        if (this.section === '.series-pending') {
            const unWatchedItems = document.querySelectorAll(
                '.series-pending .score'
            );

            unWatchedItems?.forEach((item, index) => {
                const stars = item.querySelectorAll('.score__star');

                stars.forEach((star, starIndex) => {
                    console.log('ADDING LISTENER');
                    star.addEventListener('click', () => {
                        console.log(
                            filterByWatched(this.movies, false)[index].name,
                            'ADD RATING LISTENER'
                        );
                        this.handleRating(
                            starIndex + 1,
                            filterByWatched(this.movies, false)[index].name
                        );
                    });
                });
            });
        }
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
