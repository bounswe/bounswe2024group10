/* eslint-disable import/prefer-default-export */
import api from './_axios'

export async function getPortfolio({ username }) {
  try {
    const response = await api({
      url: '/portfolio/get-portfolio',
      method: 'GET',
      params: {
        username,
      },
    })

    return response.data
  } catch (error) {
    console.log('Get Portfolio Failed', error)
  }
  return null
}

export async function addAsset({ username, assetId, amount }) {
  try {
    const response = await api({
      url: '/portfolio/add-asset',
      method: 'POST',
      data: {
        username,
        assetId,
        amount,
      },
    })

    return response.data
  } catch (error) {
    console.log('Create Post failed', error)
  }
  return null
}
