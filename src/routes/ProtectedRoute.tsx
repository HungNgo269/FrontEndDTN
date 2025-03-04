import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  propName?: string
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const accessToken = localStorage.getItem('accessToken')

  return accessToken ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
