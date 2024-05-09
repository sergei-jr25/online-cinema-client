import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/slugField/SlugField'
import UploadField from '@/components/ui/form-elements/uploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { getAdminUrl } from '@/config/url.config'

import styles from '../Admin.module.scss'

import { IActorEdit } from './actorEdit.interface'
import { useActorEdit } from './useActorEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/TextEditor'),
	{
		ssr: false
	}
)

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IActorEdit>({
		mode: 'onChange'
	})
	const { isLoading, onSubmit } = useActorEdit(setValue)
	const { push, asPath } = useRouter()

	return (
		<Meta title='Edit genre'>
			<Heading title='Edit genre' />

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.items}>
					<Field
						{...register('name', {
							required: 'Name is required'
						})}
						placeholder='name'
						type='text'
						error={errors.name}
					/>
					<div>
						<SlugField
							register={register}
							error={errors.name}
							generate={() => setValue('slug', generateSlug(getValues('name')))}
						/>
					</div>

					<Controller
						control={control}
						name='photo'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadField
								onChange={onChange}
								placeholder='Photo'
								error={error}
								folder='actors'
								value={value}
							/>
						)}
						rules={{
							required: 'Photo is required'
						}}
					/>
				</div>
				<Button onClick={() => push(getAdminUrl('acters'))}>Update</Button>
			</form>
		</Meta>
	)
}
export default ActorEdit
