import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

export const googleLogin = async () => {
  try {
    GoogleSignin.configure({
      webClientId: '388708259019-ovvpc6p37ar56bha6h5sbp84j1sbg3q3.apps.googleusercontent.com',
      offlineAccess: false,
      scopes: ['email', 'profile']
    })

    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken)
    auth().signInWithCredential(googleCredential)
    return userInfo
  } catch (error) {
    console.log(error)
  }
}

export const googleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
    auth().signOut()
  } catch (error) {
    console.log(error)
  }
}
