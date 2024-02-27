import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: COLORS.white
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 12
  },
  input: {
    marginLeft: 10,
    color: COLORS.black1
  },
  title: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: COLORS.black4
  }
})

export { styles }
