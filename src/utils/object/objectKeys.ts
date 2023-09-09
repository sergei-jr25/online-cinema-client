// export const objectKeys = <T> (obj: T) => Object.keys(obj) as Array<keyof T>
export const objectKeys =  (obj: object) => Object.keys(obj)  as Array<keyof object>