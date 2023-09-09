import { TypeMaterialIcons } from "./icons.types";

export interface IGenre{
   _id: string,
   name: string,
   slug: string,
   description: string,
   icon: TypeMaterialIcons
   
}


export interface IParametrs {
   year: string,
   duration: string,
   country: string
   
}
export interface IActor {
   _id: string,
   photo: string,
   name: string,
   countMovies: string, 
   slug: string
}

export interface IMovies {
   _id: string,
   poster: string,
   description: string,
   bigPoster: string,
   title: string,
   actors: IActor[],
   parameters: IParametrs,
   genres: IGenre[],
   countOpened: string,
   videoUrl: string, 
   rating: number,
   slug: string,
   country?: string,
   
}
