import React, { useState } from 'react'
import Header from '~/components/User/Header'
import Timeline from '~/components/User/TimeLine'
import Sidebar from '~/components/User/SideBar'
import EvidenceList from '~/components/User/EvidenceList'
import MainContent from '~/components/User/MainContent'
import SideNav from '~/components/User/SideNav'

const UserActivity: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Thành tích đặc biệt')

  // Dữ liệu mẫu cho danh sách minh chứng
  const evidenceData = [
    {
      id: 1,
      studentId: 'B24D',
      name: 'Văn Anh',
      class: 'Lớp A',
      source: 'Nguồn A',
      status: 'approved',
      type: 'Thành tích đặc biệt'
    },
    {
      id: 2,
      studentId: 'B24E',
      name: 'Nguyễn Bình',
      class: 'Lớp B',
      source: 'Nguồn B',
      status: 'pending',
      type: 'Công tác cộng đồng xã hội'
    }
    // Thêm dữ liệu mẫu khác nếu cần
  ]

  // Dữ liệu mẫu cho dòng thời gian
  const timelineData = [
    { timestamp: '09:00 21/10/2024', description: 'Cập nhật, duyệt minh chứng' },
    { timestamp: '08:00 06/11/2024', description: 'Sinh viên đánh giá' }
    // Thêm các mốc thời gian khác nếu cần
  ]

  return (
    <div className='min-h-screen flex flex-col m-0'>
      <div
        className='flex flex-row justify-start items-stretch 
        px-4 md:px-16 lg:px-24 py-20 bg-[#ffffff] w-full 
        sm:max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto'
      >
        <SideNav></SideNav>
        <MainContent
          title='Gửi minh chứng'
          decs='Những minh chứng về những hoạt động mà
         bạn đã tham gia hay những thành tích bạn đạt được'
        >
          <Timeline data={timelineData} />
          <Sidebar selectedType={selectedType} setSelectedType={setSelectedType} />
          <EvidenceList data={evidenceData.filter((item) => item.type === selectedType)} />
        </MainContent>
      </div>
    </div>
  )
}

export default UserActivity
