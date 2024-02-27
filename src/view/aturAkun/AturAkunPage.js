import { View, SafeAreaView, Image, Text, StatusBar } from 'react-native'
import { useContext, useState } from 'react'
import Modal from 'react-native-modal'

import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import { AuthContext } from '../../store/features/authContext'
import AturAkunCard from '../../components/atoms/aturAkunCard'
import { styles } from '../../styles/AturAkunPage.Style'
import CtaButton from '../../components/atoms/CtaButton'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { googleLogout } from '../../utils/GoogleLogin'
import { useLogoutMutation } from '../../api/user.api'

const AturAkunPage = ({ navigation, route }) => {
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { removeToken } = useContext(AuthContext)
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    setIsLoading(true)
    await removeToken()

    if (route.params.email) {
      await googleLogout()
    }

    await logout()
    setIsLoading(false)
    setModal(false)
    navigation.replace('AuthStackScreen', { screen: 'LoginPage' })
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <AturAkunCard
          action={() => navigation.navigate('HubungkanAkunPage', { email: route.params?.email })}
          iconWidth={31}
          iconHeight={15}
          LeftIcon={ICONS.connect}
          RightIcon={ICONS.caret}
          CardTitle={'Hubungkan Akun'}
          CardDescription={'Hubungkan akun mu supaya lebih aman'}
        />
        <View style={styles.line}></View>
        <AturAkunCard
          action={() => setModal(true)}
          iconWidth={25}
          iconHeight={25}
          LeftIcon={ICONS.logOut}
          RightIcon={ICONS.caret}
          CardTitle={'Keluar'}
          CardDescription={'Kamu akan keluar dari akun dan kembali ke halaman login'}
        />
        <View style={styles.line}></View>
        <AturAkunCard
          action={() => navigation.navigate('HapusAkunPage')}
          iconWidth={25}
          iconHeight={27}
          LeftIcon={ICONS.trashCan}
          RightIcon={ICONS.caret}
          CardTitle={'Hapus Akun'}
          CardDescription={'Seluruh informasi akun akan dihapus secara permanen'}
        />
      </View>
      <Modal isVisible={modal}>
        <View style={styles.popUpWrapper}>
          <View style={styles.popUp}>
            <Image source={ICONS.danger} />
            <Text style={styles.dangerText}>Apakah anda yakin ingin keluar?</Text>
            <View style={styles.buttonWrapper}>
              <CtaButton
                backgroundColor={COLORS.white}
                borderRadius={12}
                vPadding={verticalScale(10)}
                hPadding={horizontalScale(17)}
                borderWidth={1}
                borderColor={COLORS.warning}
                fColor={COLORS.warning}
                fSize={moderateScale(15)}
                fFamily="Poppins-Bold"
                text="Nanti dulu"
                action={() => setModal(false)}
              />
              <CtaButton
                backgroundColor={COLORS.warning}
                borderRadius={12}
                vPadding={verticalScale(10)}
                hPadding={horizontalScale(17)}
                fColor={COLORS.white}
                fSize={moderateScale(15)}
                fFamily="Poppins-Bold"
                text="Ya, Keluar"
                isLoading={isLoading}
                action={() => handleLogout()}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default AturAkunPage
