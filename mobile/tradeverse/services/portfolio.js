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
    console.log(response.data)

    return response.data
  } catch (error) {
    console.error('Create Post failed', error)
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
    console.error('Create Post failed', error)
  }
  return null
}

export async function addAsset({ username, assetId, amount }) {
  try {
    console.log('Adding asset', username, assetId, amount)

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
    console.error('Create Post failed', error)
  }
  return null
}
