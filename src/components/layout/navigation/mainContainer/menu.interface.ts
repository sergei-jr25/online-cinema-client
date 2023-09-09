import { TypeMaterialIcons } from "@/shared/types/icons.types"

export interface IMenuItem {
   icon: TypeMaterialIcons,
   link: string,
   name:string
}

export interface IMenu {
   title: string,
   items: IMenuItem[]
}