import Link from 'next/link'
import {FC} from 'react' 
 import { IGalleryItemProps } from './gallery.interface'
import cn from 'clsx'
import styles from './Gallery.module.scss'
import Image from 'next/image'


const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => { 
  

 return ( 
   <div className={styles.item }>
    <Link href={item.link}>
     <div className={cn(styles.link, {
       [styles.withText]: item.content,
       [styles.horizontal]: variant === 'horizontal', 
       [styles.vertical]: variant === 'vertical'
     })}>      
     </div>
      <div className={styles.wrap}>
         <Image className={styles.image} src={item.posterPath} alt={item.name} fill priority draggable />
        </div>
   
     </Link> 

     {item.content && 
       <div className={styles.content}>
         {item?.content?.title && <div className={styles.title}>{item.content.title }</div> }
         {item?.content?.subtitle && <div className={styles.subtitle}>{item.content.subtitle }</div> }
       </div>}
     </div>
 ) 
} 
 export default GalleryItem