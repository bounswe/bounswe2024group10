/* eslint-disable import/prefer-default-export */

export const getImageSource = (image) => {
  if (!image) return null
  const BASE = 'http://35.246.188.121:8080/api'
  return `${BASE}${image}`
}
