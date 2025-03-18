import ClientApi from './ClientApi'
const UserApi = {
  getRegistedEvents: async () => {
    try {
      const response = await ClientApi.get('/registrations/user/getevents')
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log('error while get getRegistedEvents', error)
    }
  },
  //http://localhost:8080/api/v1/registrations/attended/2?semesterId=1
  getAttendedEvents: async (userid, semesterId) => {
    try {
      const response = await ClientApi.get(`/registrations/attended/${userid}`, {
        params: { semesterId }
      })
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log('error while get getAttendedEvents', error)
    }
  }
}
export default UserApi
