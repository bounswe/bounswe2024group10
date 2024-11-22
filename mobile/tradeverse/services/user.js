import api from './_axios'

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
    console.error('Get user by username failed', error)
  }
  return null
}
