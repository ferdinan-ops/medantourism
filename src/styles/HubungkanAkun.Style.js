import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingTop: 20
  },
  line: {
    marginVertical: 24,
    width: '77%',
    height: 1,
    backgroundColor: 'rgba(130, 130, 130, 1)',
    alignSelf: 'flex-end'
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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  box: {
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
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#eb5757'
  },
  yaKeluarText: {
    color: 'white'
  }
})

export { styles }
