import { useState } from 'react'
import Avatar from './AvatarComponent'
import { Box, Popover, Typography } from '@mui/material'

const AvatarDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
        <Avatar src='avatar.jpg' alt='User Avatar' onClick={handleOpen} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box className='  w-full max-w-[200px] bg-white border-2 border-black shadow-2xl p-4'>
          <Typography variant='h6' component='h2'>
            Text in a popover
          </Typography>
          <Typography sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
        </Box>
      </Popover>
    </>
  )
}

export default AvatarDropdown
