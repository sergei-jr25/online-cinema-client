import axios  from "@/api/http"
import { IPorofileInput } from "@/components/screens/profile/profile.interface"
import { getUsersUrl } from "@/config/api.config"
import { IMovies } from "@/shared/types/movies.types"
import { IUser } from "@/shared/types/user.interface"


export const userSerive = {
   async getAll(searchTerm?:string) {
      return axios.get<IUser[]>(getUsersUrl(''), {
         params: searchTerm ? {searchTerm} : {}
      })
   },
   async getProfile() {
      return axios.get<IUser>(getUsersUrl('profile')) 
   },
   async getFavorites() {
      return axios.get<IMovies[]>(getUsersUrl('profile/favorites')) 
   },
   async togleFavorites(movieId: string) {
      return axios.post(getUsersUrl('profile/favorites'), {movieId})
   },
   async updateProfile(data:IPorofileInput) {
      return axios.put<string>(getUsersUrl('profile'), data)
   },

   async getById(id: string) {
      return axios.get<IUser>(getUsersUrl(id))
   },
   async update(id: string, data:IPorofileInput) {
      return axios.put<string>(getUsersUrl(id), data)
   }, 

   async deleteUser(id: string) {
      return axios.delete<IUser>(getUsersUrl(id))
   }
}
