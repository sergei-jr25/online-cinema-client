import Image from 'next/image'
import {FC} from 'react' 


interface IBanner {
   image: string,
   Detail?: FC | null
}

const Banner:FC<IBanner> = ({image, Detail}) => { 
 return ( 
    <div> 
       {image}
       <Image width={1200} height={400} src={image} priority unoptimized alt=''/>
       { Detail &&<Detail/>  } 
   </div> 
 ) 
} 
 export default Banner