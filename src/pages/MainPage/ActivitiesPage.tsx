import React from 'react'

interface Props {
  propName?: string
}

const ActivitiesPage: React.FC<Props> = ({ propName }) => {
  return <div className='block m-0'>activities</div>
}

export default ActivitiesPage
