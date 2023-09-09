import MaterialIcon from '@/components/ui/MaterialIcon'
import { getAdminUrl } from '@/config/url.config'
import Button from '@/utils/form-elemtns/Button'
import Field from '@/utils/form-elemtns/Field'
import SlugField from '@/utils/form-elemtns/slugField/SlugField'
import TextEditor from '@/utils/form-elemtns/TextEditor'
 import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {FC} from 'react' 
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { IgenreEdit } from './genreEdit.interface'
import { useGenreEdit } from './useGenreEdit'
import styles from '../Admin.module.scss'


const DynamicTextEditor = dynamic(() => import('@/utils/form-elemtns/TextEditor'), {
   ssr: false
})

const GenreEdit: FC = () => { 
   
   const { handleSubmit, register, formState: {errors}, setValue, getValues, control } = useForm<IgenreEdit>({
      mode: 'onChange'
   })
   const { isLoading, onSubmit } = useGenreEdit(setValue)
   const { push, asPath } = useRouter()
      
 
   
   
 return ( 
    <Meta title='Edit genre'>
    <MaterialIcon name='MdHorizontalRule'/>
       <Heading title='Edit genre' />

       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
       <div className={styles.items}>
       <Field {...register('name', {
          required: 'Name is required'
         })} placeholder='Name'
          type='text'
          error={errors.name}
       />


       <div >
          <SlugField register={register} error={ errors.name} generate={()=> setValue('slug', generateSlug(getValues('name')))}/>
       </div>

      
       <Field {...register('icon', {
          required: 'Icon is required'
         })} placeholder='Icon'
          type='text'
          error={errors.name}
       />
       <Controller
          control={control}
          name='description'
          defaultValue=''
          render={({
             field: {
               value, onChange
             },
             fieldState: {error}
          }) => (<DynamicTextEditor 
            value={value} 
            onChange={onChange} 
            error={error} 
            placeholder='Description'
            />       
          )}
          rules={{
             validate: {
                require: (v) =>
                   (v && stripHtml(v).result.length > 0) || 'Description result'
             }
          }}
             />
             </div>
          <Button onClick={()=> push(getAdminUrl('genres'))}>Update</Button>
         </form>  
      
   </Meta> 
 ) 
} 
 export default GenreEdit