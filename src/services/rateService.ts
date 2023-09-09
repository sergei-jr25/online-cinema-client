import axios  from "@/api/http"
import { IPorofileInput } from "@/components/screens/profile/profile.interface"
import { getRatingUrl, getUsersUrl } from "@/config/api.config"
import { IUser } from "@/shared/types/user.interface"


export const rattingSerive = {
   async setRatting(movieId:string, value: number) {
      return axios.post<string>(getRatingUrl('set-rating'), {movieId, value} ) 
   },
   
   async getByUserMovie(movieId:string) {
      return axios.get<number>(getRatingUrl(movieId) )  
   },
 
}
