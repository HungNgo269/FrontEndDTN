import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventApi from '~/api/EventApi'
import Event from '~/model/Event/Event'

interface ActivityDesProps {
  propName?: number
}

const ActivityDes: React.FC<ActivityDesProps> = ({ propName }) => {
  const { id } = useParams<{ id: string }>()
  const [eventData, setEventData] = useState<Event>() || null
  useEffect(() => {
    const getData = async () => {
      const result = await EventApi.getEvent(`${id}`)
      setEventData(result)
    }
    getData()
  }, [])
  const imageUrl = `http://localhost:8080/images/${eventData?.eventImage[0].imageUrl}`

  return (
    <div
      className='relative z-10 flex flex-col justify-items-start h-full min-h-screen items-center
      px-4 md:px-16 lg:px-24 m-auto  pt-20 bg-[#fbfaf6]'
    >
      <div className=' flex flex-col justify-center items-start w-2/3'>
        <div className='flex flex-row justify-between pb-8 w-full'>
          <Typography>{eventData?.eventType}</Typography>
          <Typography>{eventData?.date}</Typography>
        </div>
        <div className='flex flex-col w-5/6'>
          <div className='flex flex-row pb-4'>
            <Typography variant='h4'>{eventData?.name}</Typography>
          </div>
          <div className='flex flex-row justify-center items-center pb-4'>
            <img className='max-w-5/6' src={imageUrl}></img>
            {/* thêm img desciption nếu có thể */}
          </div>
          <div className='flex flex-row '>
            <Typography>{eventData?.description}</Typography>
          </div>
          <div className='flex flex-row '>
            <Typography>{eventData?.currentRegistrations}</Typography>
          </div>{' '}
          <div className='flex flex-row '>
            <Typography>{eventData?.maxRegistrations}</Typography>
          </div>
          <div className='flex flex-row '>
            <Typography>{eventData?.registrationEndDate}</Typography>
          </div>
          <Button>Đăng kí</Button>
        </div>
      </div>
    </div>
  )
}

export default ActivityDes
