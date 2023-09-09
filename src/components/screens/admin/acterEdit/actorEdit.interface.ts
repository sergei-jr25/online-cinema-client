import { IActor, IGenre } from "@/shared/types/movies.types";

export interface IActorEdit extends Omit<IActor, '_id'> {}