import React, { useState } from 'react'
interface AvatarProps {
  propName?: string
}

const Avatar: React.FC<AvatarProps> = ({ propName }) => {
  const [avatarDrop, setAvatarDrop] = useState(false)
  return (
    <>
      <button className='flex items-center focus:outline-blue-900'>
        <div className='w-9 h-9 rounded-full bg-black flex items-center justify-center'></div>
      </button>
    </>
  )
}

export default Avatar
