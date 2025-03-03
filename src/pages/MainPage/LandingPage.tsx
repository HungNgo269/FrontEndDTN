import React from 'react'
import ActivityTab from '~/components/Home/ActivityTab'
import Banner from '~/components/Home/Banner'
import Counter from '~/components/Home/Counter'
import ActivityNew from '~/components/Home/ActivityNew'

interface Props {
  propName?: string
}

const LandingPage: React.FC<Props> = ({ propName }) => {
  return (
    <div className='block m-0 scroll'>
      <Banner></Banner>
      <Counter></Counter>
      <ActivityNew></ActivityNew>
      <ActivityTab></ActivityTab>
    </div>
  )
}

export default LandingPage
