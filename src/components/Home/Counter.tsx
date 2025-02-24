import React from 'react'
import CounterCard from './CounterCard'

interface Props {
  propName?: string
}

const Counter: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <CounterCard></CounterCard>
    </div>
  )
}

export default Counter
