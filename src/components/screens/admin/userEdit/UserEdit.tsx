import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { getAdminUrl } from '@/config/url.config'

import AuthFields from '../../auth/AuthFields'
import styles from '../Admin.module.scss'

import { IUserEdit } from './UserEdit.interface'
import stylesUser from './UserEdit.module.scss'
import { useGenreEdit } from './useUserEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/TextEditor'),
	{
		ssr: false
	}
)

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, getValues, control } =
		useForm<IUserEdit>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useGenreEdit(setValue)
	const { push, asPath } = useRouter()

	return (
		<Meta title='User genre'>
			<Heading title='Edit genre' />

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<AuthFields formState={formState} register={register} />
				<div className={styles.items}>
					<Controller
						control={control}
						name='isAdmin'
						render={({ field }) => (
							<button
								className={stylesUser.button}
								onClick={e => {
									e.preventDefault()
									field.onChange(!field.value)
								}}
							>
								{field.value ? 'Make it regular user' : 'Make it admin'}
							</button>
						)}
					/>
				</div>
				<Button onClick={() => push(getAdminUrl('users'))}>Update</Button>
			</form>
		</Meta>
	)
}
export default UserEdit
