import cn from 'clsx'
import { ChangeEvent, FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Button from '../Button'
import Field from '../Field'

import styles from './SlugField.module.scss'

export interface ISlugFielfd {
	error?: FieldError
	register: UseFormRegister<any>
	generate: (e: ChangeEvent<EventTarget>) => void
	className?: string
}

const SlugField: FC<ISlugFielfd> = ({
	generate,
	register,
	error,
	className
}) => {
	return (
		<div>
			<Field
				{...register('slug', { required: 'Slug is required' })}
				placeholder='slug'
				error={error}
				type='text'
			/>
			<Button
				className={cn(styles.slug, { [styles.mt]: (className = 'mt') })}
				onClick={generate}
			>
				{' '}
				Generate slug
			</Button>
		</div>
	)
}
export default SlugField
