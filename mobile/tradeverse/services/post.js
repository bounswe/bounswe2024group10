/* eslint-disable import/prefer-default-export */
import api from './_axios'

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
