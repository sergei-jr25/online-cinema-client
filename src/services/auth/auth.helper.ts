import { IAuthResponse, IEmailPassword, ITokens } from "@/store/user/user.interface";
import Cookies from "js-cookie";


export const saveTokenStorage = (data: ITokens) => {
   Cookies.set('accessToken', data.accessToken)
   Cookies.set('refreshToken', data.refreshToken)
}


export const authStorage = (data: IAuthResponse) => {
   saveTokenStorage(data)
   localStorage.setItem('user', JSON.stringify(data.user))
}


export const removeTokenStorage = () => {
   Cookies.remove('accessToken')
   Cookies.remove('refreshToken')
       
}