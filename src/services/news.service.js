export const formatTimeAgo = (isoDateString) => {
  const currentDate = new Date()
  const inputDate = new Date(isoDateString)
  const timeDifference = currentDate - inputDate
  const secondsAgo = Math.floor(timeDifference / 1000)

  if (secondsAgo < 60) {
    return `${secondsAgo} detik yang lalu`
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60)
    return `${minutesAgo} menit yang lalu`
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600)
    return `${hoursAgo} jam yang lalu`
  } else {
    const daysAgo = Math.floor(secondsAgo / 86400)
    return `${daysAgo} hari yang lalu`
  }
}

export const removeHtmlTags = (str) => {
  if (str === null || str === '') return false
  else str = str.toString()
  return str.replace(/<[^>]*>/g, '')
}
