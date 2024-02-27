import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(32)
  }
})

export default Styles
