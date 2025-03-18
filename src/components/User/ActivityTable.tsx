import React from 'react'
import Event from '~/model/Event/Event'

interface ActivityTableProps {
  events: Event[]
}

const ActivityTable: React.FC<ActivityTableProps> = ({ events }) => {
  return (
    <div className='overflow-x-auto'>
      <h2 className='text-xl font-bold mb-4'>Danh sách hoạt động</h2>
      <table className='w-full border-collapse text-sm md:text-base'>
        <thead>
          <tr className='bg-blue-500 text-white'>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Tên hoạt động</th>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Mô tả</th>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Bắt đầu</th>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Kết thúc</th>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Địa điểm</th>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Điểm</th>
            <th className='border p-2 text-left border-blue-950 text-nowrap'>Kỳ</th>
          </tr>
        </thead>
        <tbody>
          {events && events.length > 0 ? (
            events.map((event, index) => (
              <tr key={event.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className='border p-2'>{event.name}</td>
                <td className='border p-2'>{event.description}</td>
                <td className='border p-2'>{new Date(event.date).toLocaleDateString()}</td>
                <td className='border p-2'>{new Date(event.endDate).toLocaleDateString()}</td>
                <td className='border p-2'>{event.location}</td>
                <td className='border p-2'>{event.score}</td>
                <td className='border p-2'>{event.semester?.name || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className='border p-4 text-center text-gray-500'>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ActivityTable
