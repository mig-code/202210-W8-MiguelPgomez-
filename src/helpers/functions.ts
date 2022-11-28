import { tvShowsType } from "../models/tvshows";

export function filterByWatched(movies: Array<tvShowsType>, watched: boolean) {
    return movies.filter((movie) => movie.watched === watched);
}



export function getFilmIdFromDom (index:number){
    const filmId = document.querySelectorAll('.serie__title')[index].textContent;
    return filmId;
}

export function titleMovieLIst (selector:string){
    return selector.substring(8).charAt(0).toUpperCase()+selector.substring(8).slice(1);
}
