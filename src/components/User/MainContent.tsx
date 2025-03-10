import { yupResolver } from '@hookform/resolvers/yup'
import { Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '~/features/auth/authActions'
import { setUser } from '~/features/user/userSlice'
import loginSchema from '~/schema/loginSchema'
import store, { AppDispatch, RootState } from '~/store/store'
interface LoginFormValues {
  username: string
  password: string
}
interface MainContentProps {
  title?: string
}

const MainContent: React.FC<MainContentProps> = ({ title }) => {
  const { loading, error, success } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) })
  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      const loginResults = await dispatch(login(data))
      if (login.fulfilled.match(loginResults)) {
        const user = loginResults.payload.userResponse
        if (user) {
          dispatch(
            setUser({
              id: user.id,
              fullname: user.fullname,
              phoneNumber: user.phoneNumber, //number ?
              studentId: user.studentId,
              address: user.address,
              email: user.email,
              dateOfBirth: user.dateOfBirth,
              username: user.username,
              active: true
            })
          )
        }
      }
      //toast
      console.log('Đăng nhập thành công')
      navigate('/')
    } catch (error) {
      //toast show loi
      console.log('error while login', error)
    }
  }
  console.log('usset', store.getState().user)
  return (
    <div className='h-full min-h-full border-1 border-l-0 border-[#d1d2e0] flex flex-col items-start justify-start w-full'>
      <div className='flex flex-col justify-center items-center  p-5  border-b-[#d1d2e0] border-b-1 w-full '>
        <Typography variant='h5' sx={{ mt: 2, mb: 1, fontWeight: '600' }} className='text-blue-900'>
          {title}
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: '400' }} className='text-blue-900'>
          Một số thông tin cá nhân về bạn
        </Typography>
      </div>
      <div className='flex flex-col  items-center  p-5  border-b-[#d1d2e0] border-b-1 w-full  h-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Username</label>
            <input
              {...register('username')}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900'
              required
            />
            {errors.username && <p className='mt-1 text-sm text-red-600'>{errors.username.message}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              {...register('password')}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900'
              required
            />
            {errors.password && <p className='mt-1 text-sm text-red-600'>{errors.password.message}</p>}
          </div>

          <div className='my-5 text-right'>
            <Link to='/forget-password-username' className='text-blue-900 text-sm hover:underline'>
              Quên mật khẩu?
            </Link>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-900 hover:bg-blue-800 text-white 
          font-bold py-2 px-4 rounded cursor-pointer'
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  )
}

export default MainContent
