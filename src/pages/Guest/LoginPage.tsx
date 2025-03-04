import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import loginSchema from '~/schema/loginSchema'
import logo from '~/assets/images/non-svg/logo.png'
import { Link } from 'react-router-dom'
import { login } from '~/features/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~/store/store'
interface LoginFormValues {
  username: string
  password: string
}
//TODO: add a spinner for loading and toast for every noti(utils)
const LoginPage: React.FC = () => {
  const { loading, error, success } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) })
  const onSubmit = async (data: { username: string; password: string }) => {
    dispatch(login(data))
  }
  return (
    <div className='bg-white min-h-screen flex flex-col justify-center items-center p-4'>
      <header className='flex my-4 md:hidden'>
        <img src={logo} className='size-9 mr-2' alt='DUT-logo' />
        <div>
          <p className='text-[0.5rem] font-medium font-inter text-black'>ĐẠI HỌC ĐÀ NẴNG</p>
          <p className='font-bold text-[0.6rem] text-black'>TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
          <hr className='w-11/12 text-left ml-0 border-gray-300' />
          <p className='text-[0.4rem] text-gray-500'>UNIVERSITY OF SCIENCE AND TECHNOLOGY - UD</p>
        </div>
      </header>

      <div className='mt-24 mb-10 md:m-0 w-full max-w-md'>
        <h1 className='font-inter text-center md:text-left text-4xl font-bold pt-5 pb-2 text-blue-900'>Đăng nhập</h1>
        <p className='text-gray-400 hidden md:block'>
          Dành cho các đơn vị đăng tải hoạt động và bộ phận xét duyệt hoạt động phục vụ cộng đồng của sinh viên
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md'>
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
        <div className='my-5 float-end'>
          <Link to='/forget-password-username' className='text-blue-500 text-sm hover:underline'>
            Quên mật khẩu?
          </Link>
        </div>
        <button type='submit' className='w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>
          Đăng nhập
        </button>
      </form>
    </div>
  )
}

export default LoginPage
