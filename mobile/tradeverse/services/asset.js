/* eslint-disable import/prefer-default-export */
import api from './_axios'

export async function getAssetDetail({ id }) {
  try {
    const response = await api({
      url: `/asset/detail/${id}`,
      method: 'GET',
    })

    return response.data
  } catch (error) {
    console.log('Get Asset Detail Failed', error)
  }
  return null
}

export async function getAllAssets() {
  try {
    const response = await api({
      url: '/asset/all',
      method: 'GET',
    })

    return response.data
  } catch (error) {
    console.log('Get All Assets Failed', error)
  }
  return null
}
