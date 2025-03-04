import React from 'react'

interface DashboardPageProps {
  propName?: string
}

const DashboardPage: React.FC<DashboardPageProps> = ({ propName }) => {
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default DashboardPage
