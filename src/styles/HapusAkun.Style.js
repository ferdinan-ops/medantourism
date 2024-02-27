import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, verticalScale } from '../theme/responsive'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  informationWrapper: {
    width: 350
  },
  information2: {
    marginTop: 32
  },
  information: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#3b4949'
  },
  confirmWrapper: {
    marginTop: 48,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    borderColor: '#828282',
    borderWidth: 0.6,
    paddingVertical: 16
  },
  confirmTextWrapper: {
    width: 290
  },
  confirm: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#252525'
  },
  confirmCheckBox: {
    width: 25,
    height: 25,
    borderRadius: 6,
    backgroundColor: '#efefef',
    borderStyle: 'solid',
    borderColor: '#252525',
    borderWidth: 1
  },
  unresponsibilityWrapper: {
    marginTop: 48,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#3b4949',
    paddingHorizontal: horizontalScale(24)
  },
  buttonWrapper: {
    width: 358,
    marginTop: 48,
    gap: verticalScale(16)
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 358,
    height: 45,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold'
  },
  hapusAkunWrapper: {
    backgroundColor: '#828282'
  },
  hapusAkunText: {
    color: '#fff'
  },
  gakJadiWrapper: {
    marginTop: 16,
    borderColor: '#eb5757',
    borderWidth: 1
  },
  gakJadiText: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#eb5757'
  },

  popUpWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popUp: {
    width: 300,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20
  },
  dangerText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.black4,
    textAlign: 'center',
    width: 236,
    marginVertical: 24
  },
  buttonPopUpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScale(16),
    width: '100%'
  },
  boxPopUp: {
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#eb5757',
    borderWidth: 1,
    width: 110,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  yaKeluarWrapper: {
    backgroundColor: '#eb5757'
  },
  buttonPopUpText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#eb5757'
  },
  yaKeluarText: {
    color: 'white'
  }
})

export { styles }
