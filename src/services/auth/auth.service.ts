import { getContentType } from "@/api/api.helper"
import { http } from "@/api/http"
import { getAuthUrl } from "@/config/api.config"
import { register } from "@/store/user/user.action"
import { IAuthResponse } from "@/store/user/user.interface"
import Cookies from "js-cookie"
import { stringify } from "querystring"
import { authStorage, removeTokenStorage } from "./auth.helper"

 

export const AuthService =  {
      async register( email: string, password: string ) {
            const response = await http.post<IAuthResponse>(getAuthUrl('/register'), { email, password })          
            if (response.data.accessToken) {
                  authStorage(response.data)
            }

            return response
      },

      async login( email: string, password: string ) {
            const response = await http.post<IAuthResponse>(getAuthUrl('/login'), { email, password })          
            if (response.data.accessToken) {
                  authStorage(response.data)
            }

            return response
      },

      logout() {
            localStorage.removeItem('user')
            removeTokenStorage() 
      },

      async getNewTokens() {
            const refreshToken = Cookies.get('refreshToken')
            const response = await http.post<IAuthResponse>(getAuthUrl('/login/access-token'),
                  { refreshToken }, { headers: getContentType() })
            
            return response
      }

     
}