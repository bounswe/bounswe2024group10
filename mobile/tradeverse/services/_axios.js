/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://35.246.188.121:8080/api',
  baseURL: 'http://localhost:8080/api',
  headers: {
    'content-type': 'application/json',
  },
})

api.interceptors.request.use(
  async (config) => {
    console.log('--> REQUEST')
    const method = config.method.toUpperCase()
    console.log('Method: ', method)
    console.log('URL: ', config.url)
    if (method === 'POST' || method === 'PUT') {
      console.log('Data: ', config.data)
    }
    if (method === 'GET') {
      console.log('Params: ', config.params)
    }
    const token = await AsyncStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// For response

api.interceptors.response.use(
  (response) => {
    console.log('<-- RESPONSE')
    if (response) console.log('Data: ', response.data)
    console.log('---------------------------------')
    return response
  },
  (error) => Promise.reject(error)
)

export default api
