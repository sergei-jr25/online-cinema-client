import { IMovies } from "@/shared/types/movies.types";

export interface ISlide extends Pick<IMovies, '_id' | 'bigPoster' | 'title' >  {
   subTitle: string,
   link: string
}