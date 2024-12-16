/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */

import api from './_axios'

export async function feedForYou() {
  try {
    const response = await api({
      url: '/post/for-you',
      method: 'GET',
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function feedFollowedTopics() {
  try {
    const response = await api({
      url: '/post/followed-topics',
      method: 'GET',
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}

export async function feedFollowedPeople() {
  try {
    const response = await api({
      url: '/post/followed-people',
      method: 'GET',
    })
    return response.data
  } catch (error) {
    // console.log('Get user by username failed', error)
  }
  return null
}
