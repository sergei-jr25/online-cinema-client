import { FC } from 'react'

import styles from './form-element.module.scss'
import { IButton } from './form.interface'

const Button: FC<IButton> = ({ children, ...rest }) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}

export default Button
