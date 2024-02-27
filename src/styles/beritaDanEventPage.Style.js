import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: COLORS.black4
  },
  lihatSemua: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: COLORS.blue
  }
})

export { styles }
