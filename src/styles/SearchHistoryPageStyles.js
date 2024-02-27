import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, verticalScale, moderateScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(12),
    gap: verticalScale(48)
  },
  input: {
    color: COLORS.black1,
    fontSize: moderateScale(14),
    // fontWeight: '300',
    borderRadius: 24
  },
  inputGroup: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderWidth: moderateScale(1),
    borderColor: COLORS.black3,
    borderRadius: 24,
    alignItems: 'center',
    gap: horizontalScale(10),
    paddingHorizontal: horizontalScale(12)
  },
  icon: {
    width: horizontalScale(20),
    height: horizontalScale(20)
  },
  wrapper: {
    gap: verticalScale(32)
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: COLORS.black4
  },
  riwayat: {
    color: COLORS.black4,
    fontWeight: '500'
  },
  riwayatText: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: verticalScale(16),
    borderWidth: moderateScale(1),
    borderColor: COLORS.secondary,
    borderRadius: 50
  },
  riwayatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: verticalScale(16)
  },
  riwayatPencarianContainer: {
    gap: verticalScale(26)
  },
  kategoriPencarianContainer: {
    gap: verticalScale(26)
  },
  populerContainer: {
    gap: 26
  },
  populerText: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: verticalScale(16),
    borderWidth: moderateScale(1),
    borderColor: COLORS.black4,
    borderRadius: 50
  }
})

export default Styles
