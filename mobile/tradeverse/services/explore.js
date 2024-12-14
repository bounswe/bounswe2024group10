import api from './_axios'

export async function explorePopular() {
  try {
    const response = await api({
      url: '/post/popular',
      method: 'GET',
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function exploreRecent() {
  try {
    const response = await api({
      url: '/post/recent',
      method: 'GET',
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
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
    console.log('Create Post failed', error)
  }
  return null
}
