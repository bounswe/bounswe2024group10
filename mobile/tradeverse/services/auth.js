import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './_axios'

export async function getMe({ username = '' }) {
  try {
    const response = await api({
      url: `/user/get-user-details/${username}`,
      method: 'GET',
    })

    return response.data
  } catch (error) {
    throw new Error(error.message || 'Kullanıcı bilgileri alınamadı')
  }
}

export async function login({ username, password }) {
  try {
    await AsyncStorage.removeItem('authToken')
    const response = await api({
      url: '/auth/login',
      method: 'POST',
      headers: {
        Authorization: undefined,
      },
      data: { username, password },
    })

    await AsyncStorage.removeItem('authToken')

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    AsyncStorage.setItem('authToken', response.data.token)
    return response
  } catch (error) {
    console.log('Login Error ->', error.message)

    throw new Error(error.message || 'Giriş başarısız')
  }
}

export async function register({
  email,
  password,
  name = '',
  username,
  tag = 0,
  profilePhoto = '',
}) {
  try {
    await AsyncStorage.removeItem('authToken')
    const response = await api({
      url: '/auth/register',
      method: 'POST',
      data: {
        email,
        password,
        name,
        username,
        tag,
        profilePhoto,
      },
      headers: {
        Authorization: undefined,
      },
    })
    if (!response.data.isSuccessful) {
      throw new Error(response.data.message)
    }
    console.log('Register Response ->', response.data)

    await AsyncStorage.removeItem('authToken')
    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    AsyncStorage.setItem('authToken', response.data.token)
    return response
  } catch (error) {
    console.log('Register Error ->', error.message)
    throw new Error(error.message || 'Kayıt başarısız')
  }
}

export async function validateToken({ token }) {
  try {
    const response = await api({
      url: '/auth/validate-token',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.log('Validate Token Error ->', error.message)
    throw new Error(error.message || 'Token doğrulama başarısız')
  }
}
