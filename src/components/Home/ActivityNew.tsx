import _ from 'lodash'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowCircleLeftIcon from '~/assets/images/svg/left_arrow.svg'
import ArrowCircleRightIcon from '~/assets/images/svg/right_arrow.svg'
import ActivityCard from './ActivityCard'
import { useEffect, useState } from 'react'
import EventApi from '~/api/EventApi'

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
    className='absolute right-[-1rem] sm:right-[-2rem] md:right-[-3rem] top-1/2 transform -translate-y-1/2 cursor-pointer z-10 '
    onClick={onClick}
  >
    <img src={ArrowCircleRightIcon} className='hidden sm:block w-8 md:w-10 lg:w-12' alt='Next' />
  </div>
)

const ActivityNew = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const result = await EventApi.getEvents(0, 6)
      setData(result.events)
      console.log(result)
    }
    getData()
  }, [])
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    initialSlide: 0,
    centerMode: false,
    swipToSlide: true,
    centerPadding: '0px',
    arrows: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div
      className='relative z-10 flex flex-col justify-center items-center 
    h-full p-4 pt-12 mx-auto pb-20'
    >
      <span className='mb-8 text-center text-xl sm:text-2xl md:text-3xl font-bold text-blue-900'>
        CÁC HOẠT ĐỘNG ĐÁNG CHÚ Ý
      </span>
      <div className='flex flex-row justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-3/5'>
        <Slider className='w-full' {...settings}>
          {_.map(data, (card, index) => (
            <div key={index} className='px-2'>
              <ActivityCard CardInfo={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ActivityNew
