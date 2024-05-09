import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { userSerive } from '@/services/userService'

import { toastrError } from '@/utils/toasrt-error'

import { IUserEdit } from './UserEdit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IUserEdit>) => {
	const { pathname, query } = useRouter()

	const userId = String(query.id)

	const { isLoading, data } = useQuery(
		['user', userId],
		() => userSerive.getById(userId),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError: error => {
				toastrError(error, 'Get user')
			},
			enabled: !!userId
		}
	)

	const { mutateAsync } = useMutation(
		'user',
		(data: IUserEdit) => userSerive.update(userId, data),
		{
			onSuccess: () => {
				toastr.success('Update user', 'Update user was succsses')
			},
			onError: error => {
				toastrError(error, 'Update user')
			}
		}
	)

	const onSubmit: SubmitHandler<IUserEdit> = async data => {
		return mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
