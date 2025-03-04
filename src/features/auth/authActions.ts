import { createAsyncThunk } from '@reduxjs/toolkit'
import ClientApi from '~/api/ClientApi'
interface LoginPayload {
  username: string
  password: string
}

interface LoginResponse {
  accessToken: string | null
  role: string
  // userInfo: object
  // token: string
}
export const login = createAsyncThunk<LoginResponse, LoginPayload, { rejectValue: string }>(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await ClientApi.post(`users/login`, {
        username,
        password
      })
      console.log('respone dn >>>', response)
      localStorage.setItem('accessToken', response.data.accessToken)

      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)
