import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

import Heading from '@/components/ui/heading/Heading'

import { AdminService } from '@/services/AdminService'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountsUsers()
	)

	return (
		<div>
			<Heading title='Users count' />
			{isLoading ? <Skeleton count={4} /> : <div> {response?.data} </div>}
		</div>
	)
}

export default CountUsers
