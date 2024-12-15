import api from './_axios'

export async function searchSubforumByTitle({ keyword }) {
  try {
    const response = await api({
      url: '/search/subforum',
      method: 'GET',
      params: { keyword },
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function getFollowedSubforums({ username }) {
  try {
    const response = await api({
      url: '/follow-subforum/get-followings',
      method: 'GET',
      params: { username },
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function getAllSubforums() {
  try {
    const response = await api({
      url: '/subforum/all',
      method: 'GET',
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function getSubforumById({ id, username }) {
  try {
    const response = await api({
      url: `/subforum/${id}`,
      method: 'GET',
      params: { username },
    })
    return response.data
  } catch (error) {
    console.log('Get Subforum by id failed', error)
  }
  return null
}

export async function followSubforum({ subforumId }) {
  try {
    const response = await api({
      url: '/subforum/follow',
      method: 'POST',
      data: { subforumId },
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function unfollowSubforum({ subforumId }) {
  try {
    const response = await api({
      url: '/subforum/unfollow',
      method: 'POST',
      data: { subforumId },
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}
