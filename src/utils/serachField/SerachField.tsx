import MaterialIcon from '@/components/ui/MaterialIcon'
import  { FC, ChangeEvent } from 'react'
import style from './search.module.scss'
interface ISerachTerm{
   searchTerm: string,
   handleSerach: (event: ChangeEvent<HTMLInputElement>) => void
}

const SerachField:FC<ISerachTerm> = ({searchTerm, handleSerach}) => {
  return (
     <div className={ style.search}>
        <MaterialIcon name='MdSearch'  />
        <input value={searchTerm} placeholder='serach' onChange={handleSerach } />
    </div>
  )
}

export default SerachField