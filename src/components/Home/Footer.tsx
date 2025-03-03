import React from 'react'
import bigLogo from '~/assets/images/non-svg/logo.png'
import InstagramIcon from '~/assets/images/svg/icon_insta.svg'
import FacebookIcon from '~/assets/images/svg/icon_fb.svg'
import XIcon from '~/assets/images/svg/icon_twitter.svg'
import SmallIcon from '~/components/common/SmallIcon'

interface Props {
  propName?: string
}

const Footer: React.FC<Props> = ({ propName }) => {
  return (
    <div className='w-full '>
      <div
        className=' mx-auto
       px-4 sm:px-6 lg:px-24 md:px-16 '
      >
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 border-b-gray-300 border-b'>
          <div className='col-span-2 bg-blue-300 p-4 '>
            <img src={bigLogo}></img>
            <span>
              Cổng thông tin phục vụ cộng đồng và sinh viên 5 tốt được vận hành bởi Đoàn thanh niên trường Đại học Bách
              Khoa, Đại học Đà Nẵng
            </span>
            <div className='flex flex-row justify-items-start items-center'>
              <SmallIcon imageSource={InstagramIcon}></SmallIcon>
              <SmallIcon imageSource={XIcon}></SmallIcon>
              <SmallIcon imageSource={FacebookIcon}></SmallIcon>
            </div>
          </div>
          <div className='bg-green-300 p-4'>
            <span></span>
            Giới thiệu Hoạt động Địa chỉ Dự án Soon
          </div>
          <div className='bg-red-300 p-4'>3</div>

          <div className='bg-yellow-300 p-4'>4</div>
        </div>
      </div>
      <div
        className='mx-auto
       px-4 sm:px-6 lg:px-24 md:px-16 '
      >
        © Bản quyền Trường Đại học Bách khoa - Đại học Đà Nẵng
      </div>
    </div>
  )
}

export default Footer
