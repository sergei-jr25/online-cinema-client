import { IFieldProps } from "@/utils/form-elemtns/form.interface";
import { ControllerRenderProps } from "react-hook-form";
import { Options } from 'react-select' 


export interface IOption {
   value: string,
   label: string
}
export interface ISelect extends IFieldProps{
   options: Options<IOption>,
   isMulti?: boolean,
   field: ControllerRenderProps<any, any>
   isLoading?: boolean
}