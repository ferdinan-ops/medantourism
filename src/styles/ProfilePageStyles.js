import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray5
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 48
  },
  profilePic: {
    width: 150,
    height: 150,
    objectFit: 'cover'
  },
  editBtn: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  username: {
    color: '#252525',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center'
  },
  email: {
    color: COLORS.black3,
    fontSize: 16,
    textAlign: 'center'
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 48,
    gap: 24
  },
  menuWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    gap: 24,
    paddingTop: 48,
    paddingHorizontal: 24
  },
  popUpContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24),
    gap: verticalScale(32),
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  popUpTitle: {
    color: COLORS.black4,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-SemiBold'
  },
  popUpButtonContainer: {
    gap: verticalScale(16)
  },
  popUpButton: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    // borderColor: COLORS.black4,
    borderRadius: 8,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(24)
  },
  buttonIcon: {
    height: horizontalScale(24),
    objectFit: 'contain'
  },
  buttonText: {
    color: COLORS.black4,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-SemiBold'
  },
  rightArrow: {
    height: verticalScale(12),
    objectFit: 'contain'
  }
})

export default Styles
