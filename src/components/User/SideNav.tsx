import { Avatar, Typography } from '@mui/material'
import React from 'react'
import store from '~/store/store'
import SideTabs from '../User/SideTabs'

interface SideNavProps {
  propName?: string
}

const SideNav: React.FC<SideNavProps> = ({ propName }) => {
  const user = store.getState().user
  return (
    <div className='flex flex-col border border-[#d1d2e0] w-1/4'>
      <div className='flex flex-col justify-center items-center p-5'>
        <Avatar sx={{ width: 100, height: 100 }}>{user?.fullname?.trim().slice(-1)}</Avatar>
        <Typography variant='h5' sx={{ mt: 2, mb: 4, fontWeight: '600', textWrap: 'nowrap' }} className='text-blue-900'>
          Thông tin cá nhân
        </Typography>
      </div>
      <SideTabs redirectPathname='/user/user-profile' title='Hồ sơ' />
      <SideTabs redirectPathname='/user/activity-point' title='Phục vụ cộng đồng' />
      <SideTabs redirectPathname='/user/noti-setting' title='Cài đặt thông báo' />
    </div>
  )
}

export default SideNav
