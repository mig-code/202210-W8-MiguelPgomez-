import { tvShowsType } from "../models/tvshows";

export function filterByWatched(movies: Array<tvShowsType>, watched: boolean) {
    return movies.filter((movie) => movie.watched === watched);
}

