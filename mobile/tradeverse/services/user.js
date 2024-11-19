import api from './_axios'

export default async function getUserByUsername({ username }) {
  try {
    const response = await api({
      url: '/auth/get-user-details',
      method: 'GET',
      headers: {
        Authorization: undefined,
      },
      data: { username },
    })

    return response.data
  } catch (error) {
    // console.error('Get user by username failed', error)
  }
  return null
}
