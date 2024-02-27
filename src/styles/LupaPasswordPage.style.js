import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, horizontalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(24)
  },
  informationWrapper: {
    marginTop: 30,
    width: 250
  },
  information: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#3b4949'
  },
  form: {
    width: 362,
    marginTop: 40
  },
  lupaPasswordAlternativeWrapper: {
    marginVertical: 52
  },
  lupaPasswordAlternativeText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: '500',
    color: '#36c9c1',
    textAlign: 'center'
  },
  buttonWrapper: {
    width: 362
  },
  loginBtn: {
    width: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 12,
    paddingVertical: verticalScale(14)
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(18)
  }
})

export default styles
