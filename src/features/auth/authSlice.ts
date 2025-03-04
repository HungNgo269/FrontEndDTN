import { createSlice } from '@reduxjs/toolkit'
import { login } from './authActions'
const accessToken = localStorage.getItem('accessToken') || null

export interface UserInfo {
  id: string
  name: string
}

interface AuthState {
  loading: boolean
  // userInfo: UserInfo | null
  role: string | null
  accessToken: string | null
  error: string | null
  success: boolean
}

const initialState: AuthState = {
  loading: false,
  // userInfo: null,
  role: null,
  accessToken,
  error: null,
  success: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.loading = false
      // state.userInfo = null
      state.accessToken = null
      state.role = null
      state.error = null
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        // state.userInfo = action.payload.userInfo//this should be contain userinfo like role,ect
        state.role = action.payload.role
        state.accessToken = action.payload.accessToken
        state.success = true
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'An unknown error occurred'
        state.success = false
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
