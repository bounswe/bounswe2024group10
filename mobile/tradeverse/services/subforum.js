import api from './_axios'

export async function searchSubforumByTitle({ keyword }) {
  // try {
  // const response = await api({
  //   url: '/subforum/search',
  //   method: 'GET',
  //   params: { keyword },
  // })
  return [
    {
      title: 'Sample Subforum 1',
      id: 1,
    },
    {
      title: 'Sample Subforum 2',
      id: 2,
    },
    {
      title: 'Sample Subforum 3',
      id: 3,
    },
    {
      title: 'Sample Subforum 4',
      id: 4,
    },
    {
      title: 'Sample Subforum 5',
      id: 5,
    },
    {
      title: 'Sample Subforum 6',
      id: 6,
    },
  ]
  // return response?.data
  // }
  //  catch (error) {
  //   // return []
  // }
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
