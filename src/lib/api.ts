import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.API_URL,
})

export { client }
