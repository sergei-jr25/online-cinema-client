import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { genreService } from '@/services/genreService'

import { objectKeys } from '@/utils/object/objectKeys'
import { toastrError } from '@/utils/toasrt-error'

import { IgenreEdit } from './genreEdit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IgenreEdit>) => {
	const { pathname, query } = useRouter()

	const genreId = String(query.id)
	// useEffect(() => {
	//    const response = genreService.getById(query.id)
	//    console.log('response',response);
	// },[query.id])

	const { isLoading, data } = useQuery(
		['get genre', genreId],
		() => genreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				objectKeys(data).forEach(key => {
					setValue(key, data[key])
				})
			},
			onError: error => {
				toastrError(error, 'Get genre')
			},
			enabled: !!genreId
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IgenreEdit) => genreService.update(genreId, data),
		{
			onSuccess: () => {
				toastr.success('Update genre', 'Update genre was succees')
			},
			onError: error => {
				toastrError(error, 'Update genre')
			}
		}
	)

	const onSubmit: SubmitHandler<IgenreEdit> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
