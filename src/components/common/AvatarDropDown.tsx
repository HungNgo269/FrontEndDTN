import { useState, useRef } from 'react'
import Avatar from './AvatarComponent'
import { Box, Popper, Typography, Fade } from '@mui/material'
import { Link } from 'react-router-dom'

const AvatarDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Open the Popper when mouse enters the Box
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current) // Clear any pending close timeout
    }
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  // Start a timeout to close the Popper when mouse leaves
  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
      setAnchorEl(null)
    }, 200)
  }

  return (
    <div onMouseLeave={handleClose} className='h-16'>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }
        }}
      >
        <Avatar
          onMouseEnter={handleOpen}
          src='avatar.jpg'
          alt='User Avatar'
          className='cursor-pointer border-2 border-blue-900 hover:shadow-lg transition-all duration-200'
        />
      </Box>
      <>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement='bottom-end'
          transition // Enable transition
          modifiers={[
            {
              name: 'offset',
              options: { offset: [0, 13] } // 13px offset below the Avatar
            }
          ]}
          sx={{ zIndex: '10000' }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
          }}
          onMouseLeave={handleClose}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={150}>
              <Box className='w-full bg-white shadow-2xl p-4 md:p-6 lg:p-8'>
                <Typography variant='h6' component='h2'>
                  Username
                </Typography>
                <div className='w-full border-b-gray-300 border-b-[0.5px]'>
                  <Typography sx={{ mt: 2 }} className='text-blue-900'>
                    Thông tin cá nhân
                  </Typography>
                </div>
                <Typography sx={{ mt: 2 }} className='text-blue-900'>
                  <Link to='/login'>Đăng nhập</Link>
                </Typography>
              </Box>
            </Fade>
          )}
        </Popper>
      </>
    </div>
  )
}

export default AvatarDropdown
