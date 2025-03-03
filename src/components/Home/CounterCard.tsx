import React from 'react'

interface CounterCardProps {
  image: string
  description: string
}

const CounterCard: React.FC<CounterCardProps> = ({ image, description }) => {
  return (
    <div className='flex items-center justify-center lg:justify-start cursor-pointer md:p-4'>
      <img className='w-6 h-6 sm:w-8 sm:h-8 md:w-14 md:h-14 lg:w-20 lg:h-20' src={image} alt={description} />
      <div className='flex flex-col items-center ml-4'>
        <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-950'>{description}</span>
      </div>
    </div>
  )
}

export default CounterCard
