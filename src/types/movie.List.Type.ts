import { tvShowsType } from "../models/tvshows";

export type MovieListOptionsType = Array<MovieListOptionType>;


export type MovieListOptionType = {
    title: string;
    selector: string;
    filterdMovies: Array<tvShowsType>;
};
