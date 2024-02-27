import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { verticalScale, moderateScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'

const MyButton = ({ text, width, action }) => {
  return (
    <TouchableOpacity onPress={action} style={[{ width: { width } }, Styles.container]}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(14),
    borderRadius: 20,
    backgroundColor: COLORS.blue
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: COLORS.white
  }
})

export default MyButton
