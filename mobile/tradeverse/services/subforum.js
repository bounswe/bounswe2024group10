import api from './_axios'

export async function searchSubforumByTitle({ title }) {
  try {
    const response = await api({
      url: '/post/get-subforums/non-recursive',
      method: 'GET',
    })
    return {
      successful: response.successful,
      subforums: response.data?.subforums?.filter((subforum) =>
        subforum.title.includes(title)
      ),
    }
  } catch (error) {
    // console.error('Get user by username failed', error)
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
    // console.error('Get user by username failed', error)
  }
  return null
}
