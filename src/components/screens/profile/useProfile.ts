import { userSerive } from "@/services/userService"
import { toastrError } from "@/utils/toasrt-error"
import { useRouter } from "next/router"
import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { IPorofileInput } from "./profile.interface"
import {toastr} from 'react-redux-toastr'


export const useProfile = (setValue: UseFormSetValue<IPorofileInput>) => {
   const {isLoading} = useQuery('profile',
   () => userSerive.getProfile(),
   {
      onSuccess: ({data}) => {
          setValue('email', data.email)
      },
      onError: (error) => toastrError(error, 'Error list')
   }  
 )

 

 const {push} = useRouter() 

 const {mutateAsync: createAsync } = useMutation('update profile', 
 (data: IPorofileInput) => userSerive.updateProfile(data),
 {
   onError: (error) =>
     toastrError(error, 'Update movie'),
 
   onSuccess: ({data: _id}) => {
   toastr.success('Update profile', 'update was successful')
 }} 
)

const onSubmit: SubmitHandler<IPorofileInput>  = async (data) => {
   return createAsync(data)
   }
   

   return {isLoading, onSubmit}

}