import { IGenre } from "@/shared/types/movies.types";

export interface IgenreEdit extends Omit<IGenre, '_id'> {}