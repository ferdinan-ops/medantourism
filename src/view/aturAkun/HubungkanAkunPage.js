import { View, SafeAreaView, StatusBar } from 'react-native'
import { useContext, useState } from 'react'

import AturAkunCard from '../../components/atoms/hubungkanAkunCard'
import { AuthContext } from '../../store/features/authContext'
import { useLoginByGoogleMutation } from '../../api/auth.api'
import { styles } from '../../styles/HubungkanAkun.Style'
import Loading from '../../components/molecules/Loading'
import { googleLogin } from '../../utils/GoogleLogin'
import ICONS from '../../assets/icons/icons'
import IMAGES from '../../assets/img/images'
import COLORS from '../../theme/colors'

const HubungkanAkunPage = ({ navigation, route }) => {
  const [loginByGoogle] = useLoginByGoogleMutation()
  const { storeToken } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoginByGoogle = async () => {
    if (!route.params?.email) {
      setIsLoading(true)
      const { user } = await googleLogin()
      const { data } = await loginByGoogle({ email: user.email, username: user.name, photo: user.photo })
      await storeToken(data.data.access_token, { userId: data.data.user_id, email: user.email })
      setIsLoading(false)
      navigation.replace('HomeStackScreen', { screen: 'HomePage' })
    }
  }

  if (isLoading) {
    return <Loading isAbsolute size={80} backgroundColor={COLORS.white} />
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <AturAkunCard
          SocialMediaLogo={IMAGES.google}
          SocialMediaWidth={39}
          SocialMediaHeight={39}
          AddIcon={ICONS.greenAddButton}
          MinusIcon={ICONS.minusButton}
          CardTitle="Google"
          CardDescription="Hubungkan akun mu supaya lebih aman"
          ConnectedAcc={route.params?.email}
          action={handleLoginByGoogle}
        />
      </View>
    </SafeAreaView>
  )
}

export default HubungkanAkunPage
