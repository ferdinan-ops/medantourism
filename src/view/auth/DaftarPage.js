import { Text, View, StatusBar, ImageBackground, Alert } from 'react-native'
import { useEffect, useState } from 'react'

import Styles from '../../styles/DaftarPageStyles'
import IMAGES from '../../assets/img/images'
import COLORS from '../../theme/colors'

import { verticalScale, moderateScale } from '../../theme/responsive'
import AltLogin from '../../components/molecules/AltLogin'
import InputGroup from '../../components/atoms/InputGroup'
import CtaButton from '../../components/atoms/CtaButton'
import { useRegisterMutation } from '../../api/auth.api'
import { checkFormValid } from '../../services/auth.service'

const DaftarPage = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setcpassword] = useState('')

  const [register, { isLoading, isError, error }] = useRegisterMutation()

  useEffect(() => {
    if (isError) Alert.alert('Register Gagal', error?.data?.message)
  }, [isError])

  const handleSubmit = async () => {
    const validation1 = checkFormValid(!username || !password || !cpassword, 'Mohon isi semua form')
    const validation2 = checkFormValid(password !== cpassword, 'Password tidak sama')

    if (validation1 || validation2) return

    try {
      const { data } = await register({ username, password, cpassword })
      navigation.navigate('AuthStackScreen', {
        screen: 'DaftarNomorHpPage',
        params: { userId: data.data.id }
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log({ error })

  return (
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground style={Styles.background} source={IMAGES.background} />
      <View style={Styles.actionContainer}>
        <View>
          <View style={[Styles.inputContainer, { marginBottom: 20 }]}>
            <View style={[Styles.inputField, { gap: 20 }]}>
              <InputGroup
                label="Username"
                placeholder="unknown_name"
                setValue={setUsername}
                value={username}
                placeholderTextColor={COLORS.black5}
              />
              <InputGroup
                label="Password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                type="password"
                placeholderTextColor={COLORS.black5}
                setValue={setPassword}
                value={password}
              />
              <InputGroup
                label="Konfirmasi Password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                type="password"
                placeholderTextColor={COLORS.black5}
                setValue={setcpassword}
                value={cpassword}
              />
            </View>
          </View>
          <View style={[Styles.altLogin, { gap: 20 }]}>
            <CtaButton
              backgroundColor={COLORS.blue}
              borderRadius={20}
              vPadding={verticalScale(14)}
              fFamily="Poppins-SemiBold"
              fSize={moderateScale(18)}
              fColor={COLORS.white}
              text="Daftar"
              action={handleSubmit}
              isLoading={isLoading}
            />
            <Text style={Styles.atau}>Atau</Text>
            <AltLogin />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center', color: COLORS.black1 }}>
            Sudah punya akun?{' '}
            <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('LoginPage')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DaftarPage
