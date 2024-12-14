/* eslint-disable import/prefer-default-export */
import api from './_axios'

export async function likePost({ postId }) {
  try {
    const response = await api({
      url: '/like/like-post',
      method: 'POST',
      params: {
        postId,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}
export async function unlikePost({ postId }) {
  try {
    const response = await api({
      url: '/like/unlike-post',
      method: 'POST',
      params: {
        postId,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}
export async function dislikePost({ postId }) {
  try {
    const response = await api({
      url: '/dislike/dislike-post',
      method: 'POST',
      params: {
        postId,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}
export async function undislikePost({ postId }) {
  try {
    const response = await api({
      url: '/dislike/undislike-post',
      method: 'POST',
      params: {
        postId,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

const categorizeContentText = (text) => {
  const splitted = text.split(' ')
  const categorized = splitted.map((word) => {
    if (word.startsWith('@')) {
      return { tag: word }
    }
    return { text: word }
  })
  return categorized
}

export async function createPost({
  username,
  title,
  parentID = 2,
  content = '',
}) {
  try {
    const response = await api({
      url: '/post/create-post',
      method: 'POST',
      data: {
        username,
        title,
        parentID,
        content: categorizeContentText(content),
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}
