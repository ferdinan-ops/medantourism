import { Alert, Platform, ToastAndroid } from 'react-native'

export const checkFormValid = (validations, message) => {
  if (validations) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      return true
    }
    Alert(message)
    return true
  }
}
