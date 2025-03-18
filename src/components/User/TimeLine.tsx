import React from 'react'

interface TimelineItem {
  timestamp: string
  description: string
}

interface TimelineProps {
  data: TimelineItem[]
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className='flex items-center justify-between p-4 bg-white border-b border-gray-200'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-gray-300'}`}></div>
          <div className='mt-2 text-sm text-gray-600'>{item.timestamp}</div>
          <div className='text-sm text-gray-800'>{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
