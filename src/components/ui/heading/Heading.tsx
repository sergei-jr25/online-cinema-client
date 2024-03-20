import { FC } from 'react'

import styles from './heading.module.scss'

const Heading: FC<{ title: string; className?: string }> = ({
	title,
	className
}) => {
	return <h1 className={`${styles.title} ${className}`}> {title} </h1>
}

export default Heading
