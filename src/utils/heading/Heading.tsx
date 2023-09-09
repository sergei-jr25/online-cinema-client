import { FC } from "react"
import styles from './heading.module.scss'
 
const Heading:FC<{title: string, className?: string}> = ({title}) => {
  return (
    <h1 className={styles.title}> {title} </h1>
  )
}

export default Heading