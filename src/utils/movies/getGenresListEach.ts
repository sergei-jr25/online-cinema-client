export const getGenersListEach = (index: number, length: number, name: string) =>
index + 1 === length ? name : name + ', ' 

interface IgetGenresList {
   name : string 
}

export const getGenresList = (array: IgetGenresList[]) => {
   return array.map(item => item.name).join(' ,')
}
 
