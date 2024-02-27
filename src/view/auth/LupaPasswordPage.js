import { View, Text, Image, StatusBar } from 'react-native'

import { verticalScale, moderateScale } from '../../theme/responsive'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputGroup from '../../components/atoms/InputGroup'
import styles from '../../styles/LupaPasswordPage.style'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'

const LupaPasswordPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={require('../../assets/img/lupaPassword.png')} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>Masukan email untuk mendapatkan kode verifikasi</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <InputGroup label="email" placeholder="Masukkan email" placeholderTextColor={COLORS.black5} />
        </View>
        <View style={styles.lupaPasswordAlternativeWrapper}>
          <CtaButton
            backgroundColor={COLORS.white}
            fFamily="Poppins-Medium"
            fColor={COLORS.blue}
            text="Coba cara lain"
            action={() => navigation.navigate('LupaPasswordPageByPhoneNumber')}
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
            text="Kirim"
            action={() => navigation.navigate('VerifikasiPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LupaPasswordPage
