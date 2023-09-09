
export interface ITableItem {
   _id: string,
   editUrl: string,
   items: string[]
}

export interface ITableItemAdmin {
   ITableItem: ITableItem,
   handerRemove: ()=>void
}