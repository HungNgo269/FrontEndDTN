import ClientApi from './ClientApi'

const EventApi = {
  getEvents: async (page: number, limit: number) => {
    try {
      const response = await ClientApi.get(`/events?page=${page}&limit=${limit}`)
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log('error while get events', error)
    }
  },
  getEvent: async (eventID: number) => {
    try {
      const response = await ClientApi.get(`/events/${eventID}`)
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log('error while get event', error)
    }
  },
  getEventCriteria: async (eventID: number) => {
    try {
      const response = await ClientApi.get(`/events/criteria/${eventID}`)
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log('error while getEventCriteria events', error)
    }
  },
  registerEvent: async (eventID: number) => {
    try {
      const response = await ClientApi.post(`/registrations/${eventID}`)
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log('error while registerEvent events', error)
    }
  }
}
export default EventApi
