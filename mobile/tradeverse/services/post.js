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

export async function createPost({ title, parentID, content = [] }) {
  try {
    const response = await api({
      url: '/post/create',
      method: 'POST',
      data: {
        title,
        subforumID: parentID,
        content,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function getPostDetail({ id }) {
  try {
    const response = await api({
      url: `/post/${id}`,
      method: 'GET',
    })
    const comments = await api({
      url: `/comment/get-comments`,
      method: 'GET',
      params: {
        postId: id,
      },
    })

    return { ...response.data, comments: comments.data }
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function getPostsByUser({ username }) {
  try {
    const response = await api({
      url: `/post/get-posts-by-user`,
      method: 'GET',
      params: {
        username,
      },
    })
    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}

export async function getPostsByTag({ tag }) {
  try {
    const response = await api({
      url: '/post/get-posts-by-tag',
      method: 'GET',
      params: { tag },
    })

    // Return the list of posts if the response is successful
    return response.data
  } catch (error) {
    console.log('Fetching posts by tag failed', error)
  }
  return null
}
