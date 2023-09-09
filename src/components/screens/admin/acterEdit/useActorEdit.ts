import { ActorService } from '@/services/ActorService'
import { objectKeys } from '@/utils/object/objectKeys'
import { toastrError } from '@/utils/toasrt-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IActorEdit } from './actorEdit.interface'

export const useActorEdit = (setValue: UseFormSetValue<IActorEdit>) => {
	const { pathname, query } = useRouter()

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				objectKeys(data).forEach(key => {
					setValue(key, data[key])
				})
			},
			onError: error => {
				toastrError(error, 'Get actor')
			},
			enabled: !!actorId
		}
	)

	const { mutateAsync } = useMutation(
		'actor',
		(data: IActorEdit) => ActorService.update(actorId, data),
		{
			onSuccess: () => {
				toastr.success('Update actor', 'Update actor was succees')
			},
			onError: error => {
				toastrError(error, 'Update actor')
			}
		}
	)

	const onSubmit: SubmitHandler<IActorEdit> = async data => {
		return mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
