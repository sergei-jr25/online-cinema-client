import { IMovies } from "@/shared/types/movies.types";

export interface ICatallog{
   title: string,
   description?: string,
   movies: IMovies[]
}