import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, moderateScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray5,
    paddingVertical: verticalScale(32)
  },
  sectionContainer: {
    gap: verticalScale(16),
    marginBottom: verticalScale(32)
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(25)
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black3
  }
})

export default Styles
