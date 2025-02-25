import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bigLogo from '~/assets/images/non-svg/logo.png'
import smallLogo from '~/assets/images/svg/smallLogo.svg.png'
interface Props {
  title?: string
}

const Header: React.FC<Props> = ({ title = 'Main Article Title' }) => {
  const [logo, setLogo] = useState(bigLogo)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHoverHeader, setIsHoverHeader] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setLogo(window.innerWidth <= 768 ? smallLogo : bigLogo)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const handleMouseEnter = () => {
    setIsHoverHeader(true)
  }
  const handleMouseLeave = () => {
    setIsHoverHeader(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 shadow-xl py-4 text-gray-100
        ${isScrolled || isHoverHeader ? 'bg-white text-blue-500 transition-all duration-300 ease-in-out' : 'backdrop-blur-sm'}`}
      >
        <nav className=' mx-auto px-4 sm:px-6 lg:px-24 md:px-16 text-inherit'>
          <div className='flex items-center justify-between h-16 text-inherit'>
            {/* Left Section - Logo */}
            <div className='flex-shrink-0 sticky w-1/4'>
              <Link
                to={'/'}
                onClick={() => {
                  scrollToTop()
                }}
                className='flex items-center'
              >
                <div className={window.innerWidth <= 768 ? `max-h-16 max-w-16` : ``}>
                  <img className='' src={logo}></img>
                </div>
              </Link>
            </div>

            {/* Middle Section - Navigation Links */}
            <div className='hidden md:flex items-center justify-center space-x-8 w-1/2 gap-6 text-inherit'>
              <Link
                to={'/'}
                onClick={() => {
                  scrollToTop()
                }}
                onMouseEnter={() => {
                  handleMouseEnter()
                }}
                onMouseLeave={() => {
                  handleMouseLeave()
                }}
                className='transition-all duration-300 font-medium px-4 py-2 rounded-lg 
                hover:bg-blue-100 hover:text-blue-500'
              >
                Giới thiệu
              </Link>
              <Link
                to={'/activities'}
                onClick={() => {
                  scrollToTop()
                }}
                onMouseEnter={() => {
                  handleMouseEnter()
                }}
                onMouseLeave={() => {
                  handleMouseLeave()
                }}
                className='transition-all duration-300 font-medium px-4 py-2 rounded-lg 
                hover:bg-blue-100 hover:text-blue-500'
              >
                Hoạt động
              </Link>
              <Link
                to={'/'}
                onClick={() => {
                  scrollToTop()
                }}
                onMouseEnter={() => {
                  handleMouseEnter()
                }}
                onMouseLeave={() => {
                  handleMouseLeave()
                }}
                className='transition-all duration-300 font-medium px-4 py-2 rounded-lg 
                hover:bg-blue-100 hover:text-blue-500'
              >
                Sinh viên 5 tốt
              </Link>
            </div>

            {/* Right Section - Search Bar + Avatar */}
            <div className='flex items-center space-x-4 justify-end w-1/4'>
              {/* Search Bar */}
              <div className={`relative hidden sm:block`}>
                <input
                  type='text'
                  placeholder='Search...'
                  className={`w-48 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-200 focus:border-blue-500 focus:outline-none transition-all ${
                    isHoverHeader ? 'border border-blue-500' : 'border border-white/30'
                  }`}
                />
                <button className='absolute right-3 top-2.5'>
                  {/* Heroicon - Magnifying Glass */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-200 hover:text-blue-500 transition-colors'
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

              {/* Avatar */}
              <div className='relative'>
                <button className='flex items-center focus:outline-blue-500'>
                  <div className='w-9 h-9 rounded-full bg-white flex items-center justify-center'></div>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button (hidden on desktop) */}
        <div className='md:hidden absolute top-4 right-4'>
          <button className='text-white'>
            {/* Heroicon - Bars 3 */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
