/* eslint-disable import/prefer-default-export */
/* eslint-disable no-else-return */
export function formatDate(isoDate) {
  const givenTime = new Date(isoDate)
  const currentTime = new Date()
  const timeDifferenceInSeconds = Math.floor((currentTime - givenTime) / 1000)

  if (timeDifferenceInSeconds < 120) {
    // Less than 2 minutes
    return 'now'
  } else if (timeDifferenceInSeconds < 3600) {
    // Between 2 minutes and 60 minutes
    const minutes = Math.floor(timeDifferenceInSeconds / 60)
    return `${minutes} minutes ago`
  } else if (timeDifferenceInSeconds < 86400) {
    // Between 1 hour and 24 hours
    const hours = Math.floor(timeDifferenceInSeconds / 3600)
    return `${hours} hours ago`
  } else if (timeDifferenceInSeconds < 604800) {
    // Between 24 hours and 7 days
    const days = Math.floor(timeDifferenceInSeconds / 86400)
    return `${days} days ago`
  } else {
    // More than 7 days, format as "12 Dec 2024"
    const options = { day: '2-digit', month: 'short', year: 'numeric' }
    return givenTime.toLocaleDateString('en-GB', options)
  }
}
