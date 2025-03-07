import React from 'react'
import ActivityTab from '~/components/Home/ActivityTab'

interface Props {
  propName?: string
}

const ActivitiesPage: React.FC<Props> = ({ propName }) => {
  return (
    <div className='block m-0 '>
      <ActivityTab></ActivityTab>
    </div>
  )
}

export default ActivitiesPage
