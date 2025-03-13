import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import ActivityCard from './ActivityCard'
import { Tab, Tabs } from '@mui/material'
import EventApi from '~/api/EventApi'
import { EventsResponse } from '~/model/Event/EventRespone'

import PaginationComponent from '../common/PaginationComponent'

const ActivityTab = () => {
  const [eventsData, setEventsData] = useState<EventsResponse>({
    events: [],
    totalPage: 0
  })

  const [currentPage, setCurrentPage] = useState(0)
  const [limit] = useState(12)
  const [value, setValue] = useState('one')

  useEffect(() => {
    const getEvents = async (page: number, limit: number) => {
      try {
        const result = await EventApi.getEvents(page, limit)
        setEventsData(result)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
    getEvents(currentPage, limit)
  }, [currentPage, limit])
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div
      className='relative z-10 flex flex-col justify-center items-center h-full 
      px-4 md:px-16 lg:px-24 m-auto lg:mb-10 md:mb-6 sm:mb-2 pt-20'
    >
      <h1 className='text-2xl font-bold m-8 text-blue-900'>CÁC HOẠT ĐỘNG</h1>
      <span className='mb-4 text-center md:text-sm sm:text-xs lg:text-base w-3/4 hidden md:block'>
        Trang web cung cấp thông tin về các hoạt động của trường, từ sự kiện truyền thống, học thuật đến hoạt động liên
        chi đoàn và ngoại khóa. Sinh viên có thể tham gia lễ hội, hội thảo, nghiên cứu khoa học, tình nguyện, thể thao
        và nhiều hoạt động bổ ích khác.
      </span>
      <span className='mb-4 text-center md:text-sm sm:text-xs lg:text-base w-3/4 block md:hidden'>
        Trang web cung cấp thông tin về các hoạt động của trường, từ sự kiện truyền thống, học thuật đến hoạt động liên
        chi đoàn và ngoại khóa.
      </span>
      <Tabs value={value} onChange={handleChange} aria-label='secondary tabs example'>
        <Tab value='one' label='Hoạt động truyền thống' />
        <Tab value='two' label='Hoạt động học thuật' />
        <Tab value='three' label='Hoạt động liên chi đoàn' />
      </Tabs>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-4/5 md:w-[5/7] lg:w-[5/7]'>
        {_.map(eventsData.events, (event) => (
          <>
            <ActivityCard key={event.id} CardInfo={event} />
          </>
        ))}
      </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={eventsData.totalPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ActivityTab
