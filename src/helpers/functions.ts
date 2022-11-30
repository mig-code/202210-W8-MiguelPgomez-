import { tvShowsType } from '../models/tvshows';

export function filterByWatched(movies: Array<tvShowsType>, watched: boolean) {
    return movies.filter((movie) => movie.watched === watched);
}

//OLD WAY
//This function is required if you want to add listeners from the movie.smart component

// export function getFilmIdFromDom(index: number) {
//     const filmId =
//         document.querySelectorAll('.serie__title')[index].textContent;
//     return filmId;
// }
