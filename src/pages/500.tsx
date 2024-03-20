import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const error500 = () => {
	return (
		<Meta title='Page not fount'>
			<Heading title='Server-side error ocured' />
		</Meta>
	)
}

export default error500
