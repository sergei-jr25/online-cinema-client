import Link from 'next/link'
import { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link className={styles.button} href={`/auth`}>
			Sign in
		</Link>
	)
}
export default AuthButton
