import api from './_axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function getUserByUsername({ username, token }) {
  try {
    const response = await api({
      url: `/user/get-user-details/${username}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.log('Get user by username failed', error)
  }
  return null
}

export async function setProfile({ email, profilePhoto, bio, tag, username }) {
  try {
    const token = await AsyncStorage.getItem('authToken')
    console.log(token)
    const response = await api.post(`/user/set-user-details/${username}`, 
      {
        email,
        profilePhoto,
        bio,
        tag,
      }, 
      {
        headers: { Authorization: `Bearer ${token}` },
        maxBodyLength: Infinity,
      })
  
    return response.data
  } catch (error) {
    console.log('Set profile failed', error)
  }
  return null
}
