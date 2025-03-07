import axios from 'axios'

const ClientApi = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 60000,
  // #import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
export default ClientApi

ClientApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
