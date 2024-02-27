import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.white,
    paddingBottom: verticalScale(32)
  }
})

export default Styles
