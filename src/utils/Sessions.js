import AsyncStorage from '@react-native-async-storage/async-storage'

export const isFirstOpen = async () => {
  try {
    const value = await AsyncStorage.getItem('isFirstOpen')
    const isFirstOpen = JSON.parse(value)
    if (isFirstOpen !== null) {
      return isFirstOpen
    }
    return null
  } catch (error) {
    return null
  }
}
