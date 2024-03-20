import { FC } from 'react'

import SceletonsLoading from '@/components/ui/skeletonsLoading/SkeletonsLoading'

import Menu from '../Menu'

import { usePopularGeneres } from './usePopularGeners'

const GenersMenu: FC = () => {
	const { isLoading, data } = usePopularGeneres()

	return (
		<div>
			{isLoading ? (
				<div>
					{' '}
					<SceletonsLoading count={5} />{' '}
				</div>
			) : (
				<Menu menu={{ title: 'Popular genres', items: data || [] }} />
			)}
		</div>
	)
}

export default GenersMenu
