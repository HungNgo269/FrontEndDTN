import React from 'react'
import CounterCard from './CounterCard'
import traditionalIcon from '~/assets/images/non-svg/icon_lcd.jpg'
import academicIcon from '~/assets/images/svg/study_icon.svg'
import lcdIcon from '~/assets/images/non-svg/icon_lcd.jpg'
import otherIcon from '~/assets/images/non-svg/icon_lcd.jpg'

interface Props {
  propName?: string
}

const Counter: React.FC<Props> = ({ propName }) => {
  return (
    <div className='px-4 md:px-16 lg:px-24 m-auto md:w-4/5 lg:w-4/5 sm:w-full z-10 relative bottom-15'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow h-fit bg-white rounded-[64.8px] px-2 '>
        <CounterCard image={traditionalIcon} description='Hoạt động truyền thống' />
        <CounterCard image={academicIcon} description='Hoạt động học thuật' />
        <CounterCard image={lcdIcon} description='Hoạt động liên chi đoàn' />
        <CounterCard image={otherIcon} description='Hoạt động khác' />
      </div>
    </div>
  )
}

export default Counter
