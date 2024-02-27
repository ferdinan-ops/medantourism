import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { verticalScale, horizontalScale, moderateScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: verticalScale(32)
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black3
  },
  sectionContainer: {
    gap: verticalScale(16),
    marginBottom: verticalScale(32)
  },
  lihatSemua: {
    color: COLORS.blue,
    fontSize: moderateScale(12)
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(25),
    alignItems: 'center'
  }
})

export default Styles
