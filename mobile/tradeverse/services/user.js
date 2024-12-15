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
    console.log('Get user by username successful. Token:', token)

    return response.data
  } catch (error) {
    console.log('Get user by username failed', error)
  }
  return null
}

export async function setProfile({ email, profilePhoto, name, bio, tag, username }) {
  try {

    const token = await AsyncStorage.getItem('authToken')
    if (!token) throw new Error('Authorization token is missing');

    console.log('Token from AsyncStorage:', token);
    const response = await api.post(
      `/user/set-user-details`,

    const response = await api.post(

      {
        email,
        //profilePhoto,
        name,
        bio,
        tag,


        username,
      },
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        maxBodyLength: Infinity,
      }
    );

    console.log('Response:', response.data);

      },
      {
        maxBodyLength: Infinity,
      }
    )

    return response.data
  } catch (error) {
    console.log('XXX Set profile failed:', error.response?.data || error.message);
    console.log('YYY Set profile failed', error)
  }
  return null
}
