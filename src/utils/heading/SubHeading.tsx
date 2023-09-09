import { FC } from "react"
import styles from './heading.module.scss'
 
const SubHeading:FC<{subtitle: string, className?: string}> = ({subtitle}) => {
  return (
    <h2 className={styles.subtitle}> {subtitle} </h2>
  )
}

export default SubHeading