import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, horizontalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.white
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
  },
  inputWrapper: {
    display: 'flex',
    gap: verticalScale(11)
  },
  inputLabel: {
    fontSize: moderateScale(14),
    color: COLORS.black3,
    marginLeft: horizontalScale(20)
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray5,
    borderRadius: 20,
    fontSize: moderateScale(14),
    paddingLeft: 24
  },
  regionWrapper: {
    flexDirection: 'row'
  },
  regionFlag: {
    width: 20 + 6,
    height: 14 + 6
  },
  regionNationalPhoneNumWrapper: {
    marginLeft: 8
  },
  regionNationalPhoneNum: {
    fontSize: 14,
    color: COLORS.black4
  },
  input: {
    marginLeft: 24
  }
})

export default styles
