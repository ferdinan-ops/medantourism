import AsyncStorage from '@react-native-async-storage/async-storage'

export const getHistorySearch = async () => {
  try {
    const value = await AsyncStorage.getItem('historySearch')
    const history = JSON.parse(value)
    if (history !== null) {
      return history
    }
    return null
  } catch (error) {
    return null
  }
}

export const storeHistorySearch = async (value) => {
  let history = await getHistorySearch()

  if (history) {
    const index = history.findIndex((item) => item === value)

    if (index === -1) {
      history.push(value)
      const jsonValue = JSON.stringify(history)
      await AsyncStorage.setItem('historySearch', jsonValue)
    }
  } else {
    history = [value]
    const jsonValue = JSON.stringify(history)
    await AsyncStorage.setItem('historySearch', jsonValue)
  }
}
