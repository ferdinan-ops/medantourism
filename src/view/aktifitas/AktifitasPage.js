import { View, SafeAreaView, StatusBar } from 'react-native'

import AktifitasButton from '../../components/atoms/AktifitasButton'
import Styles from '../../styles/AktifitasPageStyles'
import ICONS from '../../assets/icons/icons'
import { useSelector } from 'react-redux'

const AktifitasPage = ({ navigation }) => {
  const token = useSelector((state) => state.auth.token)

  const handleProtectNav = () => {
    if (token) {
      navigation.navigate('HomeNavStackScreen', { screen: 'DisimpanPage' })
    } else {
      navigation.navigate('AuthStackScreen')
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={Styles.buttonContainer}>
        <AktifitasButton icon={ICONS.saveFill} label="Disimpan" action={handleProtectNav} />
        <AktifitasButton
          icon={ICONS.globe}
          label="Terakhir Dilihat"
          action={() => navigation.navigate('HomeNavStackScreen', { screen: 'TerakhirDilihatPage' })}
        />
      </View>
    </SafeAreaView>
  )
}

export default AktifitasPage
