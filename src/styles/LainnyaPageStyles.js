import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(14),
    flex: 1
  },
  icon: {
    width: horizontalScale(60),
    height: verticalScale(60),
    objectFit: 'contain'
  }
})

export default Styles
