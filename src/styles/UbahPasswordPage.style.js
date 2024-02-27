import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, horizontalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
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
    width: 236
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
  labelWrapper: {
    marginLeft: horizontalScale(20)
  },
  label: {
    fontSize: moderateScale(14),
    color: '#3B4949'
  },
  inputWrapper: {
    marginTop: 11,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    borderRadius: 20
  },
  input2Wrapper: {
    marginTop: 24
  },
  input: {
    fontSize: 20,
    color: COLORS.black1
  },
  buttonWrapper: {
    width: 362,
    marginTop: 45
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 20,
    paddingVertical: verticalScale(14)
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(18)
  },

  popUpWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  popUp: {
    width: '100%',
    height: 350,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25
  },
  ubahPasswordSuccess: {
    width: 201,
    marginTop: -55
  },
  heroWrapper: {
    alignItems: 'center'
  },
  successInformationWrapper: {
    marginTop: 30
  },
  successInformation: {
    fontSize: 24,
    fontWeight: '500',
    color: 'rgba(59, 73, 73, 1)'
  },
  nextStepWrapper: {
    marginTop: 16,
    width: 230
  },
  nextStep: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(59, 73, 73, 1)'
  },
  buttonWrapper2: {
    width: 321,
    marginTop: 30
  }
})

export { styles }
