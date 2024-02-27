import { Text, View, Image, StatusBar, TextInput } from 'react-native'
import { useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton'
import Styles from '../../styles/DaftarNomorHpStyles'
import COLORS from '../../theme/colors'
import { useSendOTPMutation } from '../../api/auth.api'
import { checkFormValid } from '../../services/auth.service'

const DaftarNomorHpPage = ({ navigation, route }) => {
  const { userId } = route.params
  const [phone, setPhone] = useState('')
  const [sendOTP, { isLoading }] = useSendOTPMutation()

  const handleSubmit = async () => {
    const validation1 = checkFormValid(!phone, 'Mohon isi nomor telepon anda')
    const validation2 = checkFormValid(phone.length < 10, 'Nomor telepon valid minimal 10 digit')

    if (validation1 || validation2) return

    try {
      const { data } = await sendOTP({ phone, user_id: userId })
      console.log(data)
      navigation.navigate('AuthStackScreen', {
        screen: 'VerifikasiHpPage',
        params: { userId, phone }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={Styles.top}>
        <Image source={require('../../assets/img/daftarNomorHpImg.png')} style={{ alignSelf: 'center' }} />
        <Text style={[Styles.text, { alignSelf: 'center' }]}>
          Masukan nomor HP untuk{'\n'}mendapatkan kode verifikasi
        </Text>
        <View style={Styles.form}>
          <View style={Styles.inputWrapper}>
            <View>
              <Text style={Styles.inputLabel}>Nomor Whatsapp</Text>
            </View>
            <View style={Styles.inputGroup}>
              <View style={Styles.regionWrapper}>
                <View>
                  <Image style={Styles.regionFlag} source={require('../../assets/img/IconIndonesia.png')} />
                </View>
                <View style={Styles.regionNationalPhoneNumWrapper}>
                  <Text style={Styles.regionNationalPhoneNum}>+62</Text>
                </View>
              </View>
              <View style={Styles.input}>
                <TextInput
                  style={{ width: 255, color: COLORS.black1 }}
                  placeholder="Masukkan Nomor HP"
                  keyboardType="number-pad"
                  value={phone}
                  placeholderTextColor={COLORS.black5}
                  onChangeText={setPhone}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
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
  )
}

export default DaftarNomorHpPage
