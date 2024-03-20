import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validateEmail } from '@/shared/regers'

import styles from './Auth.module.scss'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordReqierd?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	formState: { errors },
	register,
	isPasswordReqierd = false
}) => {
	return (
		<div className={styles.fields}>
			<Field
				// className={styles.field}
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validateEmail,
						message: 'Please Enter a valid email address'
					}
				})}
				placeholder='Email'
				type='email'
				error={errors.email}
			/>
			<Field
				// className={styles.field}
				{...register(
					'password',
					isPasswordReqierd
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols'
								}
						  }
						: {}
				)}
				placeholder='Password'
				type='password'
				error={errors.password}
			/>
		</div>
	)
}

export default AuthFields
