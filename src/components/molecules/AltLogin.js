import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { useContext, useState } from 'react'

import ImgBtn from '../atoms/ImgBtn'
import { googleLogin } from '../../utils/GoogleLogin'
import { horizontalScale } from '../../theme/responsive'
import { useLoginByGoogleMutation } from '../../api/auth.api'
import { AuthContext } from '../../store/features/authContext'
import COLORS from '../../theme/colors'
import Loading from './Loading'

const AltLogin = () => {
  const navigation = useNavigation()
  const [loginByGoogle] = useLoginByGoogleMutation()

  const [isLoading, setIsLoading] = useState(false)
  const { storeToken } = useContext(AuthContext)

  const handleLoginByGoogle = async () => {
    setIsLoading(true)
    const { user } = await googleLogin()
    const { data } = await loginByGoogle({ email: user.email, username: user.name, photo: user.photo })
    await storeToken(data.data.access_token, { userId: data.data.user_id, email: user.email })
    setIsLoading(false)
    navigation.replace('HomeStackScreen', { screen: 'HomePage' })
  }

  if (isLoading) {
    return <Loading backgroundColor={COLORS.white} size="large" isAbsolute />
  }

  return (
    <View style={Styles.loginImgBtn}>
      <ImgBtn action={handleLoginByGoogle} icon="google" />
    </View>
  )
}

const Styles = StyleSheet.create({
  loginImgBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScale(40)
  }
})

export default AltLogin
