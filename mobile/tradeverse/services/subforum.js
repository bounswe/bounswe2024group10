import api from './_axios'

export default async function searchSubforumByTitle({ title }) {
  try {
    const response = await api({
      url: '/post/create-subforum',
      method: 'POST',
      data: { keyword: title },
    })
    return response.data
  } catch (error) {
    // console.error('Get user by username failed', error)
  }
  return null
}
