import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bigLogo from '~/assets/images/non-svg/logo.png'
import smallLogo from '~/assets/images/svg/smallLogo.svg.png'
import Avatar from '../common/Avatar'

interface Props {
  title?: string
}

const Header: React.FC<Props> = ({ title = 'Main Article Title' }) => {
  const [logo, setLogo] = useState(bigLogo)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle logo switching based on screen size
  useEffect(() => {
    const handleResize = () => {
      setLogo(window.innerWidth <= 768 ? smallLogo : bigLogo)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-xl  text-gray-100 ${
        isScrolled ? 'bg-white text-blue-900 transition-all duration-300 ease-in-out ' : 'backdrop-blur-sm'
      }`}
    >
      <nav className='mx-auto px-4 sm:px-6 lg:px-24 md:px-16 text-inherit'>
        <div className='flex items-center justify-between h-16 text-inherit'>
          {/* Left Section - Logo */}
          <div className='flex-shrink-0 sticky w-1/4'>
            <Link to='/' onClick={scrollToTop} className='flex items-center'>
              <div className={window.innerWidth <= 768 ? 'max-h-16 max-w-16' : ''}>
                <img className='w-3/4 h-3/4' src={logo} alt='Logo' />
              </div>
            </Link>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className='hidden md:flex items-center justify-center space-x-8 w-1/2 gap-6'>
            <Link
              to='/'
              className={`transition-all duration-300 font-bold   rounded-lg  text-nowrap  ${
                isScrolled ? 'text-blue-900  hover:text-[var(--primary)]' : 'text-white hover:text-blue-900'
              }`}
            >
              Giới thiệu
            </Link>
            <Link
              to='/activities'
              className={`transition-all duration-300 font-bold  rounded-lg   text-nowrap  ${
                isScrolled ? 'text-blue-900  hover:text-[var(--primary)]' : 'text-white hover:text-blue-900'
              }`}
            >
              Hoạt động
            </Link>
            <Link
              to='/'
              className={`transition-all duration-300 font-bold  rounded-lg  text-nowrap ${
                isScrolled ? 'text-blue-900  hover:text-[var(--primary)]' : 'text-white hover:text-blue-900'
              }`}
            >
              Sinh viên 5 tốt
            </Link>
          </div>

          {/* Right Section - Search Bar + Avatar */}
          <div className='flex items-center space-x-4 justify-end w-1/4'>
            {/* Search Bar */}
            <div className='relative  lg:block sm:hidden md:hidden'>
              <input
                type='text'
                placeholder='Search...'
                className={`w-48 px-4 py-2 rounded-lg ${
                  isScrolled
                    ? 'bg-gray-100 text-blue-900 placeholder-blue-900 border-gray-300'
                    : 'bg-white/20 backdrop-blur-sm text-white placeholder-gray-200 border-white/30'
                } border focus:border-blue-900 focus:outline-none transition-all`}
              />
              <button className='absolute right-3 top-2.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-200 hover:text-blue-900 transition-colors'
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
              <Avatar></Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className='md:hidden absolute top-4 right-4'>
        <button className={isScrolled ? 'text-blue-900' : 'text-white'}>
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
  )
}

export default Header
