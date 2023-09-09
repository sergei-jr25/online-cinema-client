import  { FC } from 'react'
import Skeleton, { SkeletonProps} from 'react-loading-skeleton'
import cn from 'clsx'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './skeleton.module.scss'


const SceletonsLoading: FC<SkeletonProps> = ({className, ...rest}) => {
  return (
    <Skeleton {...rest}
      baseColor="#605b5b"
      highlightColor="#fff"
      className={cn(styles.items, className)}
    /> 
  )
}

export default SceletonsLoading