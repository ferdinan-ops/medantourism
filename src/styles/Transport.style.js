import { StyleSheet } from 'react-native'
import { verticalScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingTop: 200
  },
  content: {
    width: '100%',
    height: verticalScale(635),
    backgroundColor: 'rgba(255,255,255,1)',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 24
  },
  menuWrapper: {
    marginTop: 68
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b4949'
  },
  menu: {
    marginTop: 24,
    width: 406,
    height: 179,
    borderRadius: 8,
    backgroundColor: '#DEFAFD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 24,
    paddingVertical: 30
  },
  menuTitleBus: {
    fontSize: 16
  },
  menuTitleMetrodeli: {
    fontSize: 20
  },
  menuTitleBusMetrodeli: {
    fontWeight: '700',
    color: COLORS.black4
  },
  button: {
    width: 102,
    height: 34,
    borderRadius: 4,
    backgroundColor: 'rgba(54, 201, 193, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff'
  }
})

export { styles }
