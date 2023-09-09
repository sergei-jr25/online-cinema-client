import { IOption } from '@/components/ui/select/selectr.interface'
import { ActorService } from '@/services/ActorService'
import { toastrError } from '@/utils/toasrt-error'
import { useQuery } from 'react-query'

export const useAdminAcotr = () => {
	const queryData = useQuery(['Actor of list'], () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id
				})
			),
		onError: error => {
			toastrError(error, 'Actor list')
		}
	})

	return queryData
}
