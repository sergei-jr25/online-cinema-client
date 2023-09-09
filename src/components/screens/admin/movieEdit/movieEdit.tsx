import UploadField from '@/components/ui/form-elements/uploadField/UploadField'
import SelectPage from '@/components/ui/select/Select'
import Field from '@/utils/form-elemtns/Field'
import SlugField from '@/utils/form-elemtns/slugField/SlugField'
 import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import SkeletonsLoading from '@/utils/skeletonsLoading/SkeletonsLoading'
import { generateSlug } from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {FC} from 'react' 
import { Controller, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { stripHtml } from 'string-strip-html'
import {  ImovieEdit } from './movieEdit.interface'
import { useAdminAcotr } from './useAdminActor'
import { useAdminGenre } from './useAdminGenre'
import { useMovieEdit } from './useMovieEdit'
import Button from '@/utils/form-elemtns/Button'
import { getAdminUrl } from '@/config/url.config'
// import styles from './movieEdit.module.scss'
import styles from '../Admin.module.scss'


const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
   ssr: false
})

const DynamicTextEditor = dynamic(() => import('@/utils/form-elemtns/TextEditor'), {
   ssr: false
})


const MovieEdit: FC = () => { 
   
   const { handleSubmit, register, formState: {errors}, setValue, getValues, control } = useForm<ImovieEdit>({
      mode: 'onChange' 
   })

   const {isLoading: actorsIsLoading, data: dataActors } = useAdminAcotr()
   const { isLoading: genresLoading, data: dataGenres } = useAdminGenre()
   
   
   const { isLoading, onSubmit } = useMovieEdit(setValue)
   const {push ,asPath} = useRouter()
   console.log('getValues',getValues('title'));
   return ( 
    
    <Meta title='Movie genre'>
       <Heading title='Movie genre' />

         <form className={ styles.form} onSubmit={handleSubmit(onSubmit)}>         
            {isLoading
             ? <SkeletonsLoading count={2} />
               : <>
                  <div className={styles.items}>
             <Field {...register('title', {
                required: 'Title is required'
               })} placeholder='title'
                type='text'
                error={errors.title}
                        />
                        <div >
                     <SlugField className='mt' register={register} error={errors.title} generate={(e) => {
                        e.preventDefault()
                        setValue('slug', generateSlug(getValues('title')))
                     }} />
                     </div>
                </div>
             <div className={styles.items}>
             <Field {...register('parameters.country', {
                required: 'Country is required'
               })} placeholder='Country'
                type='text'
                error={errors.parameters?.country}
             />
      
              <Field {...register('parameters.duration', {
                required: 'Duration is required'
               })} placeholder='Duration'
                type='text'
                error={errors.parameters?.duration}
             />
      
              <Field {...register('parameters.year', {
                required: 'Year is required'
               })} placeholder='Year'
                type='text'
                error={errors.parameters?.year}
             />
          </div>      
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
            <div className={styles.media}>
             <Controller
                control={control}
                name='poster'
                defaultValue=''
                render={({
                   field: {
                     value, onChange
                   },
                   fieldState: {error}
                }) => (
                   <UploadField 
                   onChange={onChange} 
                   placeholder='Poster' 
                   error={ error}
                   folder='movies' 
                   value={value} />
                  )}
                rules={{
                  required: "Poster is required"
                }}
                  /> 
             <Controller
                control={control}
                name='bigPoster'
                defaultValue=''
                render={({
                   field: {
                     value, onChange
                   },
                   fieldState: {error}
                }) => (
                   <UploadField 
                   onChange={onChange} 
                   placeholder='BigPoster' 
                   error={ error}
                   folder='movies' 
                   value={value} />
                  )}
                rules={{
                  required: "BigPoster is required"
                }}
                />
             <Controller
                control={control}
                name='videoUrl'
                defaultValue=''
                render={({
                   field: {
                     value, onChange
                   },
                   fieldState: {error}
                }) => (
                   <UploadField 
                   onChange={onChange} 
                   placeholder='Video' 
                   error={ error}
                   folder='movies' 
                   value={value}
                   noImage />
                   
                  )}
                rules={{
                  required: "Video is required"
                }}
                     />
          </div>
             <Controller
                control={control}
                name='genres'
                render={({
                   field,
                   fieldState: {error}
                }) => (
                   <DynamicSelect
                      field={field}
                      isLoading={genresLoading}
                      options={dataGenres || []}
                      isMulti
                      placeholder='Genres'
                      error={error}
                   />
                  )}
                rules={{
                  required: "Pleas select at least one genre"
                }}
                />
             <Controller
                control={control}
                name='actors'
                render={({
                   field,
                   fieldState: {error}
                }) => (
                   <DynamicSelect
                      field={field}
                      isLoading={actorsIsLoading}
                      options={dataActors || []}
                      isMulti
                      placeholder='Actors'
                      error={error}
                   />
                  )}
                rules={{
                  required: "Pleas select at least one actor"
                }}
                />
            </>
            }   
              
          <Button onClick={()=> push(getAdminUrl('movies'))}>Update</Button>
       </form>  
      
   </Meta> 
 ) 
} 
 export default MovieEdit