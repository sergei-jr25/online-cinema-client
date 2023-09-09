import auth from "@/pages/auth";
import { AuthService } from "@/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import {toastr} from 'react-redux-toastr'
import { toastrError } from "@/utils/toasrt-error";


export const register = createAsyncThunk<IAuthResponse, IEmailPassword>( 'auth/register', async ({email, password}, thunkApi) => {
   try {
      const response = await AuthService.register(email, password)
      toastr.success('Registration', 'Completed successfufly')
      return response.data
   } catch (error) {
      toastrError(error)
      console.log('error register');
      return thunkApi.rejectWithValue(error)

   }
})
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>( 'auth/login', async ({email, password}, thunkApi) => {
   try {
      const response = await AuthService.login(email, password)
      toastr.success('Login', 'Completed successfufly')
      
      return response.data
   } catch (error) {
      toastrError(error)
      return thunkApi.rejectWithValue(error)

   }
})

export const logout  = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>( 'auth/check-auth', async (_, thunkApi) => {
   try {
      const response = await AuthService.getNewTokens()
      return response.data
   } catch (error) {
      if (toastrError(error) === 'jwt expired') {
         toastr.error('Logout', 'Your autorization pls sign in again')
         thunkApi.dispatch(logout())
      }
       
        return thunkApi.rejectWithValue(error)
   }
})