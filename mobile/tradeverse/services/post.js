import api from './_axios'

export async function likePost({ username, postId }) {
  try {
    const response = await api({
      url: '/like/like-post',
      method: 'POST',
      data: { username, postId },
    })
    return response.data
  } catch (error) {
    console.error('Like Post Failed', error)
  }
  return null
}

export async function unlikePost({ username, postId }) {
    try {
      const response = await api({
        url: '/like/unlike-post',
        method: 'POST',
        data: { username, postId },
      })
      return response.data
    } catch (error) {
       console.error('Unlike post failed', error)
    }
    return null
  }

export async function dislikePost({ username, postId }) {
  try {
    const response = await api({
      url: '/dislike/dislike-post',
      method: 'POST',
      data: { username, postId },
    })
    return response.data
  } catch (error) {
     console.error('Dislike post failed', error)
  }
  return null
}

export async function undislikePost({ username, postId }) {
    try {
      const response = await api({
        url: '/dislike/dislike-post',
        method: 'POST',
        data: { username, postId },
      })
      return response.data
    } catch (error) {
       console.error('Undislike post failed', error)
    }
    return null
  }
