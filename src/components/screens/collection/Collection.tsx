import Description from '@/utils/heading/Description'
import Heading from '@/utils/heading/Heading'
import SubHeading from '@/utils/heading/SubHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react' 
import { ICollection } from './collection.interface'
import styles from './Collection.module.scss'
import CollectionItem from './CollectionItem'


const Collection: FC<{ collections: ICollection[] }> = ({ collections }) => { 
   const title = 'Discovery'
   const decription  = 'In this section you will film'

 return ( 
    <Meta title={title}
       decription={decription}
    >
       <Heading title={title} />
       <Description text={decription} />
       <section>
          {collections.map(collection => <CollectionItem key={collection._id} collection={collection } />)}
       </section>
    </Meta>
 ) 
} 
 export default Collection