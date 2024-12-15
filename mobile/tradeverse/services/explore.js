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
