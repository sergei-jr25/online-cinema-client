import { NextPage } from 'next'

import Collection from '@/components/screens/collection/Collection'
import { ICollection } from '@/components/screens/collection/collection.interface'

import { genreService } from '@/services/genreService'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections
}) => {
	return (
		<div>
			<Collection collections={collections || []} />
		</div>
	)
}
export default GenresPage

export async function getStaticProps() {
	try {
		const { data: collections } = await genreService.getCollection()

		return {
			props: {
				collections
			},
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				collections: []
			}
		}
	}
}
