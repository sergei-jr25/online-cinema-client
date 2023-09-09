import { ITableItem } from '@/components/ui/admin-navigation/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { useDebounce } from '@/hooks/useDebaunce'
import { toastrError } from '@/utils/toasrt-error'
import { toastr } from 'react-redux-toastr'

import { ActorService } from '@/services/ActorService'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export function useUser() {
	// State and setters for debounced value
	const [searchTerm, setSearchTerm] = useState('')

	const debaunceSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['acters-list', debaunceSearch],
		() => ActorService.getAll(debaunceSearch),
		{
			select: ({ data }) =>
				data.map(
					(acter): ITableItem => ({
						_id: acter._id,
						editUrl: getAdminUrl(`actor/edit/${acter._id}`),
						items: [acter.name, acter.countMovies]
					})
				),
			onError: error => toastrError(error, 'Error list')
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => ActorService.create(),
		{
			onError: error => toastrError(error, 'Create actor'),

			onSuccess: ({ data: _id }) => {
				toastr.success('Create actor', 'create was successful')
				push(getAdminUrl(`actor/edit/${_id}`))
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete acter',
		(id: string) => ActorService.delete(id),
		{
			onError: error => toastrError(error, 'Error list'),

			onSuccess: () => {
				toastr.success('Delete actor', 'delete was successful')
				queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({
			deleteAsync,
			...queryData,
			handleSearch,
			searchTerm,
			createAsync
		}),
		[handleSearch, searchTerm, deleteAsync, createAsync]
	)
}
