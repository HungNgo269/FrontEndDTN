import React from 'react'
import ActivityTab from '~/components/Home/ActivityTab'
import Banner from '~/components/Home/Banner'
import Counter from '~/components/Home/Counter'
import { Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

interface Props {
  propName?: string
}

const LandingPage: React.FC<Props> = ({ propName }) => {
  return (
    <div className='block'>
      <Banner></Banner>
      <Counter></Counter>
      <ActivityTab></ActivityTab>
    </div>
  )
}

export default LandingPage
