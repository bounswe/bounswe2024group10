import api from './_axios'

export async function getUserProfile({ username }) {
  try {
    const response = await api({
      url: `/user/profile`,
      method: 'GET',
      params: {
        username,
      },
    })
    return response.data
  } catch (error) {
    console.log('Get profile failed', error)
  }
  return null
}

export async function getUserByUsername({ username }) {
  try {
    const response = await api({
      url: `/user/get-user-details/${username}`,
      method: 'GET',
    })
    return response.data
  } catch (error) {
    console.log('Get user by username failed', error)
  }
  return null
}

export async function setProfile({ email, profilePhoto, name = '', bio, tag }) {
  try {

    const response = await api.post(
      '/user/set-user-details',

      {
        email,
        profilePhoto,
        bio,
        tag,
      },
      {
        maxBodyLength: Infinity,
      }
    )


    return response.data
  } catch (error) {
    console.log(
      'XXX Set profile failed:',
      error.response?.data || error.message
    )
    console.log('YYY Set profile failed', error)
  }
  return null
}

export const followUser = async ({ username }) => {
  try {
    const response = await api({
      url: '/follow/follow-user',
      method: 'POST',
      params: {
        followedUsername: username,
      },
    })


    return response.data
  } catch (error) {
    console.log('Follow user failed', error)
  }
  return null
}

export const unfollowUser = async ({ username }) => {
  try {
    const response = await api({
      url: '/follow/unfollow-user',
      method: 'POST',
      params: {
        unfollowedUsername: username,
      },
    })

    return response.data
  } catch (error) {
    console.log('Unfollow user failed', error)
  }
  return null
}
