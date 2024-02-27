import AsyncStorage from '@react-native-async-storage/async-storage'

export const getLastSeen = async () => {
  try {
    const value = await AsyncStorage.getItem('lastSeen')
    const lastSeen = JSON.parse(value)
    if (lastSeen !== null) {
      return lastSeen
    }
    return null
  } catch (error) {
    return null
  }
}

export const storeLastSeen = async (value) => {
  let lastSeen = await getLastSeen()
  let status

  if (lastSeen) {
    const index = lastSeen.findIndex((item) => item.id === value.id && item.type === value.type)

    if (index !== -1) {
      lastSeen.splice(index, 1)
      status = false
    } else {
      lastSeen.push({ ...value })
      status = true
    }

    const jsonValue = JSON.stringify(lastSeen)
    await AsyncStorage.setItem('lastSeen', jsonValue)
  } else {
    lastSeen = [{ ...value }]
    const jsonValue = JSON.stringify(lastSeen)
    await AsyncStorage.setItem('lastSeen', jsonValue)
    status = true
  }

  return status
}
