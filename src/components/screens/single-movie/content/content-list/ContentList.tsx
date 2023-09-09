import Link from 'next/link'
import {FC, Fragment} from 'react' 
import { IConentList } from '../content.interface'


const ContentList:FC<IConentList> = ({links, name}) => { 
 return ( 
   <>
     <div>{ name}</div>
        {links.map((link, idx) =>
          <Fragment key={idx}>             
                <Link  href={link.link}>{link.title}
                </Link>
                  { idx + 1 === links.length ? ',' : ''}
                </Fragment>
                )}
    </>
 ) 
} 
 export default ContentList