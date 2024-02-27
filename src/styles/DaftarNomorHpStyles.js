import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { verticalScale, horizontalScale, moderateScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    gap: 64,
    backgroundColor: COLORS.white
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black1
  },
  top: {
    gap: 48
  },
  form: {
    width: 362,
    marginTop: 40
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

export default Styles
