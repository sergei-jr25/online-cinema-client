import cn from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAUthRedirect } from './useAuth'

const Auth: FC = () => {
	const { isLoading } = useAuth()

	useAUthRedirect()

	const [type, setType] = useState<'register' | 'login'>('login')

	const {
		reset,
		register: registerInput,
		handleSubmit,
		formState
	} = useForm<IAuthInput>({
		mode: 'onChange'
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}

	return (
		<Meta title='Auth'>
			<div className={styles.auth}>
				<Heading title='Auth' className={styles.auth__title} />
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordReqierd
					/>

					<div className={styles.buttons}>
						<Button
							className={styles.button}
							type='submit'
							disabled={isLoading}
							onClick={() => setType('login')}
						>
							Login
						</Button>
						<Button
							className={cn(styles.button, styles.registr)}
							type='submit'
							disabled={isLoading}
							onClick={() => setType('register')}
						>
							Regitration
						</Button>
					</div>
				</form>
			</div>
		</Meta>
	)
}

export default Auth
