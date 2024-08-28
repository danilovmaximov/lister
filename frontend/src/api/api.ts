import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
})

export const api2 = axios.create({
  baseURL: 'https://c1f26361-8bf1-4fbf-bd72-99195cab4fee.mock.pstmn.io',
  timeout: 5000,
})
