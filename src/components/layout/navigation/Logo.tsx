import Image from 'next/image'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.png'

import styles from './navigation.module.scss'

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<Image src={logoImage} alt={'logotype'} />
		</div>
	)
}

export default Logo
