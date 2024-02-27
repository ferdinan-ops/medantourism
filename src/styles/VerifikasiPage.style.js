import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, horizontalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.white
  },
  icon: {
    width: 237,
    height: 237
  },
  informationWrapper: {
    marginTop: 30,
    width: 300
  },
  information: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#3b4949'
  },
  otpWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 48
  },
  otpBox: {
    backgroundColor: 'rgba(54, 201, 193, 0.1)',
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(54, 201, 193, 1)',
    borderRadius: 6,
    letterSpacing: 54,
    color: COLORS.black4,
    fontSize: moderateScale(24),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center'
  },
  otpBox2: {
    marginHorizontal: 16
  },
  otpBox4: {
    marginStart: 16
  },
  otp: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black'
  },
  verifikasiAlternativeWrapper: {
    marginVertical: 52
  },
  verifikasiAlternativeText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: '500',
    color: '#36c9c1',
    textAlign: 'center'
  },
  buttonWrapper: {
    width: 362
  },
  verifikasiBtn: {
    width: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 12,
    paddingVertical: verticalScale(14)
  },
  verifikasiText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(18)
  }
})

export { styles }
