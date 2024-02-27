import { View, Text, Image, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useContext, useEffect, useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import { styles } from '../../styles/VerifikasiPage.style'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'
import { checkFormValid } from '../../services/auth.service'
import { useSendOTPMutation, useVerifyOTPMutation } from '../../api/auth.api'
import { AuthContext } from '../../store/features/authContext'

const VerifikasiHpPage = ({ navigation, route }) => {
  const { userId, phone } = route.params
  const [otpCode, setOtpCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { storeToken } = useContext(AuthContext)
  const [verifyOTP, { isError, error }] = useVerifyOTPMutation()
  const [sendOTP, { isLoading: sendOTPLoading }] = useSendOTPMutation()

  useEffect(() => {
    if (isError) {
      Alert.alert('Verifikasi Gagal', error.message)
      setIsLoading(false)
    }
  }, [isError])

  const handleSendOtp = async () => {
    const { data } = await sendOTP({ phone, user_id: userId })
    console.log({ data })
  }

  const handleSubmit = async () => {
    const validation1 = checkFormValid(!otpCode, 'Mohon isi kode verifikasi anda')
    const validation2 = checkFormValid(otpCode.length < 4, 'Kode verifikasi minimal 4 digit')
    if (validation1 || validation2) return
    setIsLoading(true)

    try {
      const { data } = await verifyOTP({ otp: otpCode })
      await storeToken(data.access_token, { userId: data.user.id, phone: data.user.phone })
      setIsLoading(true)
      navigation.replace('HomeStackScreen', { screen: 'HomePage' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={require('../../assets/img/verifikasiPage.png')} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>Masukan 4 digit kode yang terkirim ke {phone}</Text>
      </View>
      <View style={styles.otpWrapper}>
        <TextInput
          style={[styles.otpBox1, styles.otpBox]}
          placeholderTextColor={COLORS.black3}
          keyboardType="numeric"
          placeholder="****"
          maxLength={4}
          value={otpCode}
          onChangeText={setOtpCode}
        />
      </View>
      <View style={styles.verifikasiAlternativeWrapper}>
        <CtaButton
          backgroundColor={COLORS.white}
          fFamily="Poppins-Medium"
          fColor={COLORS.blue}
          text="Kirim ulang kode"
          action={handleSendOtp}
          isLoading={sendOTPLoading}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <CtaButton
          backgroundColor={COLORS.blue}
          borderRadius={20}
          vPadding={verticalScale(14)}
          fFamily="Poppins-SemiBold"
          fSize={moderateScale(18)}
          fColor={COLORS.white}
          isLoading={isLoading}
          text="Verifikasi"
          action={handleSubmit}
        />
      </View>
    </SafeAreaView>
  )
}

export default VerifikasiHpPage
