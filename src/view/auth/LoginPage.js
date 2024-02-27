import { Text, View, StatusBar, ImageBackground, Alert } from 'react-native'
import { useContext, useEffect, useState } from 'react'

import Styles from '../../styles/LoginPageStyles'
import COLORS from '../../theme/colors'

import { moderateScale, verticalScale } from '../../theme/responsive'
import LupaPasswordBtn from '../../components/atoms/LupaPasswordBtn'
import { AuthContext } from '../../store/features/authContext'
import { checkFormValid } from '../../services/auth.service'
import AltLogin from '../../components/molecules/AltLogin'
import InputGroup from '../../components/atoms/InputGroup'
import CtaButton from '../../components/atoms/CtaButton'
import { useLoginMutation } from '../../api/auth.api'

const LoginPage = ({ navigation }) => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { storeToken } = useContext(AuthContext)
  const [login, { error, isError }] = useLoginMutation()

  useEffect(() => {
    if (isError) {
      Alert.alert('Login Gagal', error?.data?.error)
      setIsLoading(false)
    }
  }, [isError])

  const handleSubmit = async () => {
    const validation1 = checkFormValid(!phone || !password, 'Mohon isi semua form')
    if (validation1) return
    setIsLoading(true)

    try {
      const { data } = await login({ phone, password })
      await storeToken(data.access_token, { userId: data.user.id, phone: data.user.phone })
      setIsLoading(false)
      navigation.replace('HomeStackScreen', { screen: 'HomePage' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground style={Styles.background} source={require('../../assets/img/background.png')} />
      <View style={Styles.actionContainer}>
        <View>
          <View style={Styles.inputContainer}>
            <View style={Styles.inputField}>
              <InputGroup
                label="No. Whatsapp"
                value={phone}
                setValue={setPhone}
                placeholder="08123456789"
                placeholderTextColor={COLORS.black5}
                keyboardType="number-pad"
              />
              <InputGroup
                label="Password"
                value={password}
                setValue={setPassword}
                placeholderTextColor={COLORS.black5}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                type="password"
              />
            </View>
            <LupaPasswordBtn action={() => navigation.navigate('LupaPasswordPageByPhoneNumber')} />
          </View>
          <View style={Styles.altLogin}>
            <CtaButton
              backgroundColor={COLORS.blue}
              borderRadius={20}
              vPadding={verticalScale(14)}
              fFamily="Poppins-SemiBold"
              fSize={moderateScale(18)}
              fColor={COLORS.white}
              text="Log In"
              isLoading={isLoading}
              action={handleSubmit}
            />
            <Text style={Styles.atau}>Atau</Text>
            <AltLogin />
          </View>
        </View>
        <View>
          <Text style={{ textAlign: 'center', color: COLORS.black1 }}>
            Belum punya akun?{' '}
            <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('DaftarPage')}>
              Daftar
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default LoginPage
