import api from './_axios'

export async function getExploreFeed({ username }) {
  try {
    const response = await api({
      url: '/post/explore',
      method: 'GET',
      params: {
        username,
      },
    })

    return response.data
  } catch (error) {
    console.error('Create Post failed', error)
  }
  return null
}

export async function search({ username, keyword = '' }) {
  try {
    const response = await api({
      url: '/post/explore/search/non-recursive',
      method: 'GET',
      params: {
        username,
        keyword,
      },
    })

    return response.data
  } catch (error) {
    console.error('Create Post failed', error)
  }
  return null
}
