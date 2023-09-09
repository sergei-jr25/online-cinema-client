import { IGenre, IMovies } from "@/shared/types/movies.types";

export interface ImovieEdit extends Omit<IMovies, '_id'> {}