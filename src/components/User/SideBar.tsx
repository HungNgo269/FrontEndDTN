import React from 'react'

interface SidebarProps {
  selectedType: string
  setSelectedType: (type: string) => void
}

const evidenceTypes = ['Thành tích đặc biệt', 'Tuyển truyền tích cực về Trường/Khoa', 'Công tác cộng đồng xã hội']

const Sidebar: React.FC<SidebarProps> = ({ selectedType, setSelectedType }) => {
  return (
    <div className='w-1/4 bg-gray-100 p-4'>
      <h2 className='text-lg font-bold mb-4'>Loại minh chứng</h2>
      {evidenceTypes.map((type) => (
        <label key={type} className='block mb-2'>
          <input
            type='radio'
            name='evidenceType'
            value={type}
            checked={selectedType === type}
            onChange={() => setSelectedType(type)}
            className='mr-2'
          />
          {type}
        </label>
      ))}
    </div>
  )
}

export default Sidebar
