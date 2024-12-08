import api from './_axios'

export async function searchSubforumByTitle({ keyword }) {
  try {
    const response = await api({
      url: '/post/subforum/searchKeyword',
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
      url: '/post/get-subforums/non-recursive',
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
      url: `/post/subforum/${id}`,
      method: 'GET',
      params: { username },
    })
    return response.data
  } catch (error) {
    console.log('Get Subforum by id failed', error)
  }
  return null
}

export async function followSubforum({ username, subforumId }) {
  try {
    const response = await api({
      url: '/follow-subforum/follow-subforum',
      method: 'GET',
      params: { followerUsername: username, followedSubforumID: subforumId },
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function unfollowSubforum({ username, subforumId }) {
  try {
    const response = await api({
      url: '/follow-subforum/unfollow-subforum',
      method: 'GET',
      params: { followerUsername: username, followedSubforumID: subforumId },
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}
