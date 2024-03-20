import {FC} from 'react' 
import styles from './heading.module.scss'
import  parser  from 'html-react-parser'

const Description:FC<{text: string, className?: string}> = ({text}) => { 
 return ( 
    <div className={styles.description }>
       {parser(text)}
 </div> 
 ) 
} 
 export default Description