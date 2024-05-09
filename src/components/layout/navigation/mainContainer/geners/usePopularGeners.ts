import { useQuery } from 'react-query'

import { genreService } from '@/services/genreService'

import { getGenreUrl } from '@/config/url.config'

// import { useQuery } from "react-query/types/react"
import { IMenuItem } from '../menu.interface'

export const usePopularGeneres = () => {
	const queryData = useQuery('popular menu', () => genreService.getAll(), {
		select: ({ data }) =>
			data
				.filter(genre => genre.icon)
				.map(
					genre =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							name: genre.name
						} as IMenuItem)
				)
				.splice(0, 4)
	})

	return queryData
}
