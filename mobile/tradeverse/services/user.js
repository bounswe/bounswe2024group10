import api from './_axios'

export async function getUserByUsername({ username, token }) {
  try {
    if (!username) return null;
    const response = await api.post('/auth/get-user-details', { username }, { headers: { Authorization: `Bearer ${token}` } });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Get user by username failed', error)
    return null
  }
}
