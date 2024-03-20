import { ChangeEvent, FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import style from './search.module.scss'

interface ISerachTerm {
	searchTerm: string
	handleSerach: (event: ChangeEvent<HTMLInputElement>) => void
}

const SerachField: FC<ISerachTerm> = ({ searchTerm, handleSerach }) => {
	return (
		<div className={style.search}>
			<MaterialIcon name='MdSearch' />
			<input
				className={style.search__input}
				value={searchTerm}
				placeholder='serach'
				onChange={handleSerach}
			/>
		</div>
	)
}

export default SerachField
