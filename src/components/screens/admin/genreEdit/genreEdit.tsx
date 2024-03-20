import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { stripHtml } from 'string-strip-html'
import { Controller } from / Fieldok - form/
'

import Button from '@/components/ui/form-elements/Button'
import MaterialIcon from '@/components/ui/MaterialIcon'

import SlugField from '@/components/ui/form-elements/slugField/SlugField'
import Heading from '@/components/ui/heading/Heading'
import Field from '@/utils/form-elemtns/Field'
import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { getAdminUrl } from '@/config/url.config'

import styles from '../Admin.module.scss'

import { IgenreEdit } from './genreEdit.interface'
import { useGenreEdit } from './useGenreEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/TextEditor'),
	{
		ssr: false
	}
)

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IgenreEdit>({
		mode: 'onChange'
	})
	const { isLoading, onSubmit } = useGenreEdit(setValue)
	const { push, asPath } = useRouter()

	return (
		<Meta title='Edit genre'>
			<MaterialIcon name='MdHorizontalRule' />
			<Heading title='Edit genre' />

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.items}>
					<Field
						{...register('name', {
							required: 'Name is required'
						})}
						placeholder='Name'
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

					<Field
						{...register('icon', {
							required: 'Icon is required'
						})}
						placeholder='Icon'
						type='text'
						error={errors.name}
					/>
					<Controller
						control={control}
						name='description'
						defaultValue=''
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<DynamicTextEditor
								value={value}
								onChange={onChange}
								error={error}
								placeholder='Description'
							/>
						)}
						rules={{
							validate: {
								require: v =>
									(v && stripHtml(v).result.length > 0) || 'Description result'
							}
						}}
					/>
				</div>
				<Button onClick={() => push(getAdminUrl('genres'))}>Update</Button>
			</form>
		</Meta>
	)
}
export default GenreEdit
