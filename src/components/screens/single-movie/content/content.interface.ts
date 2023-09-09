interface IList {
   _id: string,
   title: string,
   link: string
}


export interface IConentList {
   name: string,
   links: IList[]
}