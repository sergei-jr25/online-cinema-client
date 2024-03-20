import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import AuthFields from '../auth/AuthFields'

import styles from './Profile.module.scss'
import { IPorofileInput } from './profile.interface'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { setValue, handleSubmit, formState, register } =
		useForm<IPorofileInput>()
	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title='Auth'>
			<div className={styles.auth}>
				<Heading title='Auth' />
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					{isLoading ? (
						<Skeleton />
					) : (
						<AuthFields formState={formState} register={register} />
					)}
					<div className={styles.buttons}>
						<Button>Update</Button>
					</div>
				</form>
			</div>
		</Meta>
	)
}
export default Profile
