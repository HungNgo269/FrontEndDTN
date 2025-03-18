import React from 'react'

interface Evidence {
  id: number
  studentId: string
  name: string
  class: string
  source: string
  status: string
  type: string
}

interface EvidenceListProps {
  data: Evidence[]
}

const EvidenceList: React.FC<EvidenceListProps> = ({ data }) => {
  return (
    <div className='w-3/4 p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Danh sách minh chứng</h2>
        <div>
          <button className='bg-red-500 text-white px-4 py-2 rounded mr-2'>Thêm mới</button>
          <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded'>Bỏ lọc tùy chỉnh</button>
        </div>
      </div>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border p-2'>TT</th>
            <th className='border p-2'>Mã SV</th>
            <th className='border p-2'>Họ tên</th>
            <th className='border p-2'>Lớp</th>
            <th className='border p-2'>Nguồn khai báo</th>
            <th className='border p-2'>Trạng thái</th>
            <th className='border p-2'>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={item.status === 'approved' ? 'bg-pink-100 border-l-4 border-red-500' : ''}>
              <td className='border p-2'>{index + 1}</td>
              <td className='border p-2'>
                <a href='#' className='text-blue-500 underline'>
                  {item.studentId}
                </a>
              </td>
              <td className='border p-2'>{item.name}</td>
              <td className='border p-2'>{item.class}</td>
              <td className='border p-2'>{item.source}</td>
              <td className='border p-2 text-green-500'>{item.status === 'approved' ? 'Được duyệt' : 'Chưa duyệt'}</td>
              <td className='border p-2'>
                <button className='text-green-500 mr-2'>✓</button>
                <button className='text-red-500'>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 flex justify-end'>
        <span>Tổng số: {data.length}</span>
        {/* Có thể thêm điều khiển phân trang ở đây */}
      </div>
    </div>
  )
}

export default EvidenceList
