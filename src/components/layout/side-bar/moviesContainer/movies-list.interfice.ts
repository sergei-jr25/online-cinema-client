import { IMovies } from "@/shared/types/movies.types";

export interface IMoviesList {
   link: string,
   title: string,
   movies: IMovies[]
}