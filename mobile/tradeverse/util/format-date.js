/* eslint-disable arrow-body-style */
const formatDate = (isoString) => {
  return new Date(isoString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const isoDate = '2024-12-08T10:14:48.465014'
console.log(formatDate(isoDate))
