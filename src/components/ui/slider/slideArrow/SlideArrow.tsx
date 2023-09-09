import {FC} from 'react' 
import styles from './SlideArrow.module.scss'
import cn from 'clsx'
import MaterialIcon from '../../MaterialIcon'
export interface ISlideArrows {
   variant: 'left' | 'right',
   clickHandler: () => void
}

const SlideArrow: FC<ISlideArrows> = ({ clickHandler, variant }) => { 
   
   const isLeft = variant === 'left'

   return ( 
    
    <button onClick={clickHandler} className={cn(styles.arrow, {
       [styles.left]: isLeft,
       [styles.right]: !isLeft
    }) }>
       <MaterialIcon  name={ isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
   </button> 
 ) 
} 
 export default SlideArrow