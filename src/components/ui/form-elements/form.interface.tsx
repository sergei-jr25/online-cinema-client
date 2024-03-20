import {ButtonHTMLAttributes, ChangeEvent, CSSProperties, InputHTMLAttributes} from 'react'
import { FieldError } from 'react-hook-form'
import {EditorProps} from 'draft-js'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> { }

export interface IFieldProps {
   placeholder: string,
   type?: string,
   error?: FieldError | any 
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField { }

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
   onChange: (...event: any[]) => void,
   value: string
}

export interface IUploadFiles {
   folder?: string,
   value?: string,
   onChange: (...event: any[])=> void,
   placeholder: string,
   error?: FieldError,
   styles?: CSSProperties,
   noImage?: boolean

}