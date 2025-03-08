import { configureStore } from '@reduxjs/toolkit'
import authReducer from '~/features/auth/authSlice'
import userReducer from '~/features/user/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
})
export type RootState = ReturnType<typeof store.getState> //TODO: understand this and the thign below
export type AppDispatch = typeof store.dispatch
export default store
