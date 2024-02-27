import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { verticalScale, horizontalScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: verticalScale(32),
    paddingHorizontal: horizontalScale(24)
  },
  buttonContainer: {
    gap: verticalScale(16)
  }
})

export default Styles
