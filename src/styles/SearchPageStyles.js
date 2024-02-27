import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { moderateScale, verticalScale, horizontalScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: verticalScale(63),
    paddingBottom: verticalScale(23)
  },
  profilePic: {
    width: horizontalScale(43),
    height: verticalScale(43),
    borderWidth: moderateScale(2),
    borderColor: COLORS.gray3,
    borderRadius: 100
  },
  input: {
    fontSize: moderateScale(12),
    borderRadius: 24,
    color: COLORS.black1
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    paddingLeft: horizontalScale(12),
    paddingRight: horizontalScale(66)
  },
  icon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain'
  },
  contentContainer: {
    paddingTop: verticalScale(32),
    backgroundColor: COLORS.gray5,
    flex: 1,
    gap: verticalScale(32)
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black3
  },
  sectionContainer: {
    gap: verticalScale(16)
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(25)
  }
})

export default Styles
