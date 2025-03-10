import React from 'react'

interface Props {
  propName?: string
}

const SearchBarResult: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default SearchBarResult
