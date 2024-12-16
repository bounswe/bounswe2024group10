import api from './_axios'

export async function searchUser({ keyword = '' }) {
  try {
    const response = await api({
      url: '/search/user',
      method: 'GET',
      params: {
        keyword,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

//same functions for subofurms, tags, assets, posts
export async function searchSubforum({ keyword = '' }) {
  try {
    const response = await api({
      url: '/search/subforum',
      method: 'GET',
      params: {
        keyword,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function searchTag({ keyword = '' }) {
  try {
    const response = await api({
      url: '/search/tag',
      method: 'GET',
      params: {
        keyword,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function searchAsset({ keyword = '' }) {
  try {
    const response = await api({
      url: '/search/asset',
      method: 'GET',
      params: {
        keyword,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function searchPost({ keyword = '' }) {
  try {
    const response = await api({
      url: '/search/post',
      method: 'GET',
      params: {
        keyword,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}
