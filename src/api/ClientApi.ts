import axios from 'axios'

const ClientApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
  // #import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
export default ClientApi
