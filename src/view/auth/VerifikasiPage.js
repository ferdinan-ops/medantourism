import { View, Text, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import { styles } from '../../styles/VerifikasiPage.style'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'
import { checkFormValid } from '../../services/auth.service'
import { useSendForgotPasswordOTPMutation, useVerifyOTPMutation } from '../../api/auth.api'

const VerifikasiPage = ({ navigation, route }) => {
  const { phone, code } = route.params
  const [codeTry, setCodeTry] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation()
  const [sendOtp, { isLoadingSendOtp }] = useSendForgotPasswordOTPMutation()

  const handleSubmit = async () => {
    const validation1 = checkFormValid(!otpCode, 'Mohon isi kode verifikasi anda')
    const validation2 = checkFormValid(otpCode.length < 4, 'Kode verifikasi minimal 4 digit')
    if (validation1 || validation2) return

    await verifyOTP({ otp_code: otpCode })
    navigation.navigate('UbahPasswordPage', { code: codeTry !== '' ? codeTry : code, phone })
  }

  const handleSendOtp = async () => {
    const { data } = await sendOtp({ phone })
    setCodeTry(data.data.code)
    console.log({ code: data })
  }

  console.log({ codeTry })

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
          isLoading={isLoadingSendOtp}
          action={handleSendOtp}
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
          text="Verifikasi"
          isLoading={isLoading}
          action={handleSubmit}
        />
      </View>
    </SafeAreaView>
  )
}

export default VerifikasiPage
