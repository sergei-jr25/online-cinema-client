import Button from '@/utils/form-elemtns/Button'
import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react' 
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import AuthFields from '../auth/AuthFields'
import { IPorofileInput } from './profile.interface'
import styles from './Profile.module.scss'
import { useProfile } from './useProfile'


const Profile: FC = () => { 
   
   const { setValue, handleSubmit, formState, register } = useForm<IPorofileInput>()
   const {isLoading, onSubmit} = useProfile(setValue)


 return ( 
   <Meta title='Auth'>
   <div className={styles.auth}>
   <Heading title='Auth' /> 
   <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
   {isLoading 
      ? <Skeleton/>
      : <AuthFields
      formState={formState}
      register={register}
      />} 
       <div className={styles.buttons}>                 
        <Button>Update</Button>
      </div>
   </form>
   
      
  </div>
</Meta>
 ) 
} 
 export default Profile