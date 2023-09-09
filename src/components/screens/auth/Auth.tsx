 import React, { FC, useState } from 'react'
import { useForm , SubmitHandler} from 'react-hook-form'
import { IAuthInput } from './auth.interface'
import { useAUthRedirect } from './useAuth'
import styles from './Auth.module.scss'
import Meta from '@/utils/meta/Meta'
import Heading from '@/utils/heading/Heading'
import Button from '@/utils/form-elemtns/Button'
import { useAuth } from '@/hooks/useAuth'
import AuthFields from './AuthFields'
import { useActions } from '@/hooks/useActions'
import cn from 'clsx'
  
const Auth: FC = () => {
   const { isLoading } = useAuth()

   useAUthRedirect()
    
    const [type, setType] = useState<'register'| 'login'>('login')
    
   const {reset, register: registerInput, handleSubmit, formState} = useForm<IAuthInput>({
       mode: 'onChange'
   })

   const {login, register} = useActions()
    
    
    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
       if (type === 'login') login(data)
       else if (type === 'register') register(data)
      reset()
    }

    return (
       <Meta title='Auth'>
          <div className={styles.auth}>
          <Heading title='Auth' /> 
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
             <AuthFields
                formState={formState}
                register={registerInput}
                isPasswordReqierd
                />
                
                <div className={styles.buttons}>                 
               <Button className={styles.button} type='submit' disabled={isLoading} onClick={ ()=> setType('login')} >Login</Button>
               <Button className={cn(styles.button ,styles.registr) } type='submit' disabled={isLoading} onClick={ ()=> setType('register')} >Regitration</Button>
             </div>
          </form>
          
             
         </div>
       </Meta>
   )
 }
 
 export default Auth