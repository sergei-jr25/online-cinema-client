import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	console.log('image', image)

	return (
		<div className={styles.banner}>
			<Image fill src={image} priority unoptimized alt='' />
			{Detail && <Detail />}
		</div>
	)
}
export default Banner
