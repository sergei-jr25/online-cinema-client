import axios from "@/api/http"

export const fileSerivce = {

   async upload(file: FormData, folder?: string) {
      return axios.post<{ url: string, name: string }[]>('/files', file, {
         params: { folder },
         headers: {'Content-Type': 'multipart/form-data' }
      })
      
   },
}