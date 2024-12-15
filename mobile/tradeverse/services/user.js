import api from './_axios'

export async function getUserByUsername({ username, token }) {
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
    console.log('Get user by username failed', error)
  }
  return null
}

export async function setProfile({ email, profilePhoto, bio, tag, username }) {
  try {
    const response = await api.post(
      `/user/set-user-details/${username}`,
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
    console.log('Set profile failed', error)
  }
  return null
}
