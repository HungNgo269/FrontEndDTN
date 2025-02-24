import React from 'react'

interface Props {
  propName?: string
}

const CounterCard: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>CounterCard</h1>
    </div>
  )
}

export default CounterCard
