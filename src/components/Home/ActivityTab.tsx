import React, { useState } from 'react'
import _ from 'lodash'
import ActivityCard from './ActivityCard'

interface Props {
  propName?: string
}
const slides = Array.from(
  { length: 100 },
  () => `https://picsum.photos/${384}/${576}?random=${Math.floor(Math.random() * 1000)}`
)

const ActivityTab: React.FC<Props> = ({ propName }) => {
  const itemsPerPage = 12
  const totalPages = Math.ceil(slides.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentSlides = slides.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className='relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-16 lg:px-24 m-auto lg:mb-10 md:mb-6 sm:mb-2'>
      <h1 className='text-2xl font-bold m-8 text-blue-900'>CÁC HOẠT ĐỘNG</h1>
      <span className='mb-4 text-center md:text-sm sm:text-xs lg:text-base w-3/4 hidden md:block'>
        Trang web cung cấp thông tin về các hoạt động của trường, từ sự kiện truyền thống, học thuật đến hoạt động liên
        chi đoàn và ngoại khóa. Sinh viên có thể tham gia lễ hội, hội thảo, nghiên cứu khoa học, tình nguyện, thể thao
        và nhiều hoạt động bổ ích khác.
      </span>

      <span className='mb-4 text-center md:text-sm sm:text-xs lg:text-base w-3/4 block md:hidden'>
        Trang web cung cấp thông tin về các hoạt động của trường, từ sự kiện truyền thống, học thuật đến hoạt động liên
        chi đoàn và ngoại khóa.
      </span>
      {/* Grid layout for ActivityCards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 md:w-4/5 sm:w-full'>
        {_.map(currentSlides, (slide, index) => (
          <ActivityCard key={startIndex + index} CardImage={slide} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex flex-wrap justify-center lg:my-16 md:mt-10 md:mb-10 sm:mt-6 sm:mb-6'>
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ActivityTab
