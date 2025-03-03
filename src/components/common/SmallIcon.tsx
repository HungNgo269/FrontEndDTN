import React from 'react'

interface Props {
  imageSource?: string
}

const SmallIcon: React.FC<Props> = ({ imageSource }) => {
  return (
    <>{imageSource && <img src={imageSource} alt='icon' className='lg:w-6 md:w-6 lg:h-6 md:h-6 sm:w-4 sm:h-4' />}</>
  )
}

export default SmallIcon
