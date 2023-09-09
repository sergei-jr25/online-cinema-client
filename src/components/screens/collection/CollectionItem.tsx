import {FC} from 'react' 
import { ICollection } from './collection.interface'
import CollectionImage from './CollectionImage'


const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => { 
   
 return ( 
    <div>
       <CollectionImage collection={ collection} />
       <div>{collection.title}</div>
 
   </div> 
 ) 
} 
 export default CollectionItem   