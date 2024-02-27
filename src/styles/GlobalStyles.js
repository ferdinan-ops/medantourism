import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { moderateScale } from '../theme/responsive'

const GlobalStyles = StyleSheet.create({
  HeaderBarTItle: {
    color: COLORS.black4,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold'
  },
  AuthHeaderBarTitle: {
    color: COLORS.white,
    fontSize: moderateScale(24),
    fontFamily: 'Poppins-Bold'
  }
})

export default GlobalStyles
