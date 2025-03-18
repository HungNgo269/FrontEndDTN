import React from 'react'
import Banner from '~/components/Home/Banner'
import Counter from '~/components/Home/Counter'
import ActivityNew from '~/components/Home/ActivityNew'
import CriteriaPage from './CriteriaPage'

interface Props {
  propName?: string
}

const LandingPage: React.FC<Props> = ({ propName }) => {
  return (
    <div className='block m-0 scroll'>
      <Banner></Banner>
      <Counter></Counter>

      <CriteriaPage></CriteriaPage>
      <ActivityNew></ActivityNew>
    </div>
  )
}

export default LandingPage
