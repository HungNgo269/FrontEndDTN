import { Box, Button, Card, CardContent, CardHeader, CardMedia, Stack, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventApi from '~/api/EventApi'
import UserApi from '~/api/UserApi'
import Event from '~/model/Event/Event'
import EventCriteria from '~/model/Event/EventCriteria'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import moment from 'moment'

interface ActivityDesProps {
  propName?: number
}

const CardHeaderNoPadding = styled(CardHeader)(`
  padding: 0;
  &:last-child {
    padding: 0;
  }
`)

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800]
    })
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#0a67af',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1c398e'
    })
  }
}))

const ActivityDes: React.FC<ActivityDesProps> = ({ propName }) => {
  const { id } = useParams<{ id: string }>()
  const [eventData, setEventData] = useState<Event | null>(null)
  const [registed, setRegisted] = useState<Event[]>([])
  const [checkRegister, setCheckRegister] = useState(false)
  const [eventCriteria, setEventCriteria] = useState<EventCriteria[]>([])

  useEffect(() => {
    const getEvent = async () => {
      try {
        const result = await EventApi.getEvent(`${id}`)
        setEventData(result)
      } catch (error) {
        console.error('Failed to fetch event data:', error)
      }
    }
    const getEventCriteria = async () => {
      try {
        const result = await EventApi.getEventCriteria(`${id}`)
        setEventCriteria(result?.eventCriteria || [])
      } catch (error) {
        console.error('Failed to fetch event criteria:', error)
      }
    }
    const getRegistedEvent = async () => {
      try {
        const result = await UserApi.getRegistedEvents()
        setRegisted(result)
      } catch (error) {
        console.error('Failed to fetch registered events:', error)
      }
    }
    getEvent()
    getEventCriteria()
    getRegistedEvent()
  }, [id])

  useEffect(() => {
    if (registed && eventData) {
      const isRegistered = registed.some((event) => event.id === eventData.id)
      setCheckRegister(isRegistered)
    }
  }, [registed, eventData])

  const handleRegister = async () => {
    try {
      const result = await EventApi.registerEvent(`${id}`)
      console.log(result)
      const updatedRegisted = await UserApi.getRegistedEvents()
      setRegisted(updatedRegisted)
    } catch (error) {
      console.error('Failed to register event:', error)
    }
  }
  // chỗ để logic hủy đăng ký
  const handleUnregister = async () => {
    try {
      const result = await EventApi.unregisterEvent(`${id}`)
      console.log(result)
      const updatedRegisted = await UserApi.getRegistedEvents()
      setRegisted(updatedRegisted)
    } catch (error) {
      console.error('Failed to unregister event:', error)
    }
  }

  if (!eventData) {
    return <div>Loading...</div>
  }

  const percentage =
    eventData && eventData.maxRegistrations > 0
      ? (eventData.currentRegistrations / eventData.maxRegistrations) * 100
      : 0

  return (
    <div className='relative z-10 flex flex-col justify-items-start h-full min-h-screen items-center px-4 md:px-16 lg:px-24 m-auto py-20 bg-[#fbfaf6]'>
      <div className='flex flex-col md:flex-row w-full max-w-[1200px] gap-8'>
        {/* Article */}
        <div className='flex flex-col w-full max-w-[800px]'>
          <div className='flex flex-row justify-between pb-8 w-full'>
            <Typography>{eventData.eventType}</Typography>
            <Typography>{eventData.date}</Typography>
          </div>
          <div className='flex flex-col w-full'>
            <div className='pb-4'>
              <Typography variant='h4' sx={{ color: '#1c398e' }}>
                {eventData.name}
              </Typography>
            </div>
            <div className='flex flex-row justify-center items-center pb-4'>
              <img className='w-full rounded-lg' src={eventData.eventImage[0]?.imageUrl} alt={eventData.name} />
            </div>
            <div>
              <Typography>{eventData.description}</Typography>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col w-full max-w-[330px] gap-4 sticky top-20'>
            <Typography variant='body2'>
              Đã đăng ký: {eventData.currentRegistrations} / {eventData.maxRegistrations}
            </Typography>
            <Stack sx={{ width: '100%' }}>
              <BorderLinearProgress
                variant='determinate'
                value={percentage}
                sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#1c398e' } }}
              />
            </Stack>
            <div className='flex flex-col gap-2'>
              <div>
                <span className='font-bold'>Địa điểm:</span> {eventData.location}
              </div>
              <div>
                <span className='font-bold'>Điểm phục vụ cộng đồng:</span> {eventData.score} điểm
              </div>
              <ol>
                <span className='font-bold'>Các tiêu chí của sự kiện: </span>
                {eventCriteria.map((criteria, index) => (
                  <li key={index}>
                    <span> - {criteria.name} </span>
                  </li>
                ))}
              </ol>
              <div>
                <span className='font-bold'>Ngày kết thúc đăng ký:</span>{' '}
                {moment(eventData.registrationEndDate).format('DD/MM/YYYY')}
              </div>
              <div>
                <span className='font-bold'>Hoạt động diễn ra từ ngày:</span>{' '}
                {moment(eventData.date).format('DD/MM/YYYY')} đến ngày {moment(eventData.endDate).format('DD/MM/YYYY')}
              </div>
            </div>

            <div>
              {checkRegister ? (
                <Button
                  variant='outlined'
                  sx={{
                    backgroundColor: '#1c398e',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#0a67af'
                    }
                  }}
                  size='small'
                  onClick={handleUnregister}
                >
                  <span className='font-bold text-white text-center p-0.5'>Hủy đăng ký</span>
                </Button>
              ) : (
                <Button
                  variant='outlined'
                  sx={{
                    backgroundColor: '#1c398e',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#0a67af'
                    }
                  }}
                  size='small'
                  disabled={
                    moment().isAfter(eventData.registrationEndDate) ||
                    eventData.currentRegistrations >= eventData.maxRegistrations ||
                    moment().isBefore(eventData?.registrationStartDate)
                  }
                  onClick={handleRegister}
                >
                  <span className='font-bold text-white text-center p-0.5'>Đăng ký</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityDes
