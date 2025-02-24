import React from 'react'

interface Props {
  propName?: string
}

const Footer: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  )
}

export default Footer
