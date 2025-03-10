import React from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
  isScrolled?: boolean
}

const SearchBar: React.FC<Props> = ({ isScrolled }) => {
  const location = useLocation()
  return (
    <div className='relative  lg:block sm:hidden md:hidden'>
      {/* seacrhbar */}
      <input
        type='text'
        placeholder='Search...'
        className={`w-48 px-4 py-2 rounded-lg ${
          isScrolled || location.pathname !== '/'
            ? 'bg-gray-100 text-blue-900 placeholder-blue-900 border-gray-300'
            : 'bg-white/20 backdrop-blur-sm text-white placeholder-gray-200 border-white/30'
        } border focus:border-blue-900 focus:outline-none transition-all`}
      />
      <button className='absolute right-3 top-2.5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`w-5 h-5 ${
            isScrolled || location.pathname !== '/' ? 'text-[var(--primary)]' : 'text-gray-200'
          } hover:text-blue-900 transition-colors`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar
