import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue
  },
  background: {
    flex: 1
  },
  actionContainer: {
    flex: 5,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 24,
    paddingTop: 61,
    paddingBottom: 84
  },
  inputContainer: {
    gap: 8,
    marginBottom: 64
  },
  inputField: {
    gap: 24
  },
  atau: {
    textAlign: 'center',
    color: COLORS.black1,
    fontSize: 18,
    fontWeight: '600'
  },
  altLogin: {
    gap: 34
  }
})

export default Styles
