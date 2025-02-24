import React from 'react'
import ActivityTab from '~/components/Home/ActivityTab'
import Banner from '~/components/Home/Banner'
import Counter from '~/components/Home/Counter'
interface Props {
  propName?: string
}

const LandingPage: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <ActivityTab></ActivityTab>
    </div>
  )
}

export default LandingPage
