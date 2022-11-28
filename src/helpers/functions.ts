import { tvShowsType } from "../models/tvshows";

export function filterByWatched(movies: Array<tvShowsType>, watched: boolean) {
    return movies.filter((movie) => movie.watched === watched);
}

export function getFilmIdFromDom (index:number){
    const filmId = document.querySelectorAll('.serie__title')[index].textContent;
    return filmId;
}
