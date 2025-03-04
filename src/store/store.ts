import { configureStore } from '@reduxjs/toolkit'
import authReducer from '~/features/auth/authSlice'
const store = configureStore({
  reducer: {
    auth: authReducer
  }
})
export type RootState = ReturnType<typeof store.getState> //TODO: understand this and the thign below
export type AppDispatch = typeof store.dispatch
export default store
