import dynamic from 'next/dynamic'
import {FC} from 'react' 
import SlideItem from '../slider/SlideItem'
import { IGalleryItem } from './gallery.interface'
import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'



const Gallery: FC<{ items: IGalleryItem[]}> = ({items}) => { 
 return ( 
   <div className={styles.gallery}>
     {items.slice(0, 3).map(item => <GalleryItem key={item.link} item={ item} variant='vertical'/>)}
   </div> 
 ) 
} 
 export default Gallery