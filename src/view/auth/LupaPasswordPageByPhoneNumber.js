import { View, Text, Image, StatusBar, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from '../../styles/LupaPasswordPageByPhoneNumber.style'
import { verticalScale, moderateScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'
import { useEffect, useState } from 'react'
import { checkFormValid } from '../../services/auth.service'
import { useSendForgotPasswordOTPMutation } from '../../api/auth.api'

const LupaPasswordPage = ({ navigation }) => {
  const [phone, setPhone] = useState('')
  const [sendOtp, { isLoading, isError, error }] = useSendForgotPasswordOTPMutation()

  useEffect(() => {
    if (isError) {
      Alert.alert('Gagal', error?.data?.message)
    }
  }, [isError])

  const handleSubmit = async () => {
    const validation1 = checkFormValid(!phone, 'Mohon isi nomor telepon anda')
    const validation2 = checkFormValid(phone.length < 10, 'Nomor telepon valid minimal 10 digit')
    if (validation1 || validation2) return

    const { data } = await sendOtp({ phone })
    console.log({ forgotPasswordOt: data })
    navigation.navigate('VerifikasiPage', { phone, code: data.data.code })
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={require('../../assets/img/lupaPassword.png')} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>Masukan nomor Whatsapp untuk mendapatkan kode verifikasi</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <View>
              <Text style={styles.inputLabel}>Nomor Whatsapp</Text>
            </View>
            <View style={styles.inputGroup}>
              <View style={styles.regionWrapper}>
                <View>
                  <Image style={styles.regionFlag} source={require('../../assets/img/IconIndonesia.png')} />
                </View>
                <View style={styles.regionNationalPhoneNumWrapper}>
                  <Text style={styles.regionNationalPhoneNum}>+62</Text>
                </View>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{ width: 255, color: COLORS.black1 }}
                  placeholder="Masukkan Nomor HP"
                  placeholderTextColor={COLORS.black5}
                  value={phone}
                  keyboardType="numeric"
                  onChange={(e) => setPhone(e.nativeEvent.text)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buttonWrapper, { marginTop: verticalScale(32) }]}>
          <CtaButton
            backgroundColor={COLORS.blue}
            borderRadius={20}
            vPadding={verticalScale(14)}
            fFamily="Poppins-SemiBold"
            fSize={moderateScale(18)}
            fColor={COLORS.white}
            text="Kirim"
            isLoading={isLoading}
            action={handleSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LupaPasswordPage
