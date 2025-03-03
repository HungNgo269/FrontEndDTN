import React, { MouseEventHandler } from 'react'
import Avatar from '@mui/material/Avatar'

interface AvatarProps {
  alt?: string
  src?: string
  onClick?: MouseEventHandler
}

const AvatarComponent: React.FC<AvatarProps> = ({ onClick, src = '' }) => {
  return <Avatar alt='avatar' src={src} onClick={onClick} className='w-10 h-10 cursor-pointer' />
}

export default AvatarComponent
