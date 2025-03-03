import React from 'react'
import _ from 'lodash'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowCircleLeftIcon from '~/assets/images/svg/left_arrow_circle.svg'
import ArrowCircleRightIcon from '~/assets/images/svg/right_arrow_circle.svg'
import ActivityCard from './ActivityCard'

const slides = [
  'https://volunteer.hcmute.edu.vn/uploads/images/1655261114-845ee9db.jpg',
  'https://volunteer.hcmute.edu.vn/assets/images/spkt02.png',
  'https://volunteer.hcmute.edu.vn/uploads/images/1654834340-cf3a3.jpg',
  'https://volunteer.hcmute.edu.vn/uploads/images/1655261114-845ee9db.jpg',
  'https://volunteer.hcmute.edu.vn/assets/images/spkt02.png',
  'https://volunteer.hcmute.edu.vn/uploads/images/1654834340-cf3a3.jpg',
  'https://volunteer.hcmute.edu.vn/uploads/images/1655261114-845ee9db.jpg',
  'https://volunteer.hcmute.edu.vn/assets/images/spkt02.png',
  'https://volunteer.hcmute.edu.vn/uploads/images/1654834340-cf3a3.jpg'
]

const PrevArrow = ({ onClick }) => (
  <div
    className='absolute left-[-1rem] sm:left-[-2rem] md:left-[-3rem] top-1/2 transform -translate-y-1/2 cursor-pointer z-10'
    onClick={onClick}
  >
    <img src={ArrowCircleLeftIcon} className='hidden sm:block w-8 md:w-10 lg:w-12' alt='Previous' />
  </div>
)

const NextArrow = ({ onClick }) => (
  <div
    className='absolute right-[-1rem] sm:right-[-2rem] md:right-[-3rem] top-1/2 transform -translate-y-1/2 cursor-pointer z-10'
    onClick={onClick}
  >
    <img src={ArrowCircleRightIcon} className='hidden sm:block w-8 md:w-10 lg:w-12' alt='Next' />
  </div>
)

const ActivityNew = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px'
        }
      }
    ]
  }

  return (
    <div className='relative z-10 flex flex-col justify-center items-center h-full px-2 sm:px-4 md:px-16 lg:px-24 md:py-4 lg:py-4 mx-auto'>
      <span className='mb-8 text-center text-xl sm:text-2xl md:text-3xl font-bold text-blue-900'>
        CÁC HOẠT ĐỘNG MỚI
      </span>
      <div className='flex flex-row justify-center items-center w-full sm:w-4/5 md:w-4/5 lg:w-4/5'>
        <Slider className='w-full' {...settings}>
          {_.map(slides, (slide, index) => (
            <div key={index} className='px-2'>
              <ActivityCard CardImage={slide} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ActivityNew
