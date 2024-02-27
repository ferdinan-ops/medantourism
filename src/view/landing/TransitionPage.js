import { View, Text } from 'react-native'
import COLORS from '../../theme/colors'
import { moderateScale } from '../../theme/responsive'
import useGetIsFirtsOpen from '../../hooks/useGetIsFirtsOpen'

const TransitionPage = ({ navigation }) => {
  const isFirstOpen = useGetIsFirtsOpen()

  setTimeout(() => {
    if (isFirstOpen) {
      navigation.navigate('OnBoardingPage')
    } else {
      navigation.navigate('HomeStackScreen', { screen: 'HomePage' })
    }
  }, 500)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: COLORS.black3, fontSize: moderateScale(40), fontFamily: 'Poppins-Bold' }}>
        Medan{'\n'}
        <Text style={{ color: COLORS.blue }}>Tourism</Text>
      </Text>
    </View>
  )
}

export default TransitionPage
