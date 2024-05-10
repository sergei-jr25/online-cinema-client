import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebaunce'

import { moviesService } from '@/services/moviesSerive'

export const useSearch = () => {
	const [search, setSearch] = useState('')
	const debauncedSerach = useDebounce(search, 500)

	const { data, isSuccess } = useQuery(
		['search movies list', debauncedSerach],
		() => moviesService.getAll(debauncedSerach),
		{
			select: ({ data }) => data,
			enabled: !!debauncedSerach
		}
	)

	const serachHandle = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	return { data, isSuccess, serachHandle, search }
}
