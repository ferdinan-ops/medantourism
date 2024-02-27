import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, verticalScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(53)
  },
  wrapper: {
    gap: verticalScale(24)
  }
})

export default Styles
