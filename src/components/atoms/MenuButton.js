import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'

const MenuButton = ({ icon, label, action }) => {
  return (
    <TouchableOpacity onPress={action} style={Styles.container}>
      <Image source={icon} style={Styles.icon} />
      <Text style={Styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: verticalScale(8)
  },
  label: {
    color: COLORS.black3
  },
  icon: {
    width: horizontalScale(60),
    height: verticalScale(60),
    objectFit: 'contain'
  }
})

export default MenuButton
