import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native'
import COLORS from '../../theme/colors'
import { horizontalScale, moderateScale } from '../../theme/responsive'

const LayananMenu = ({ icon, label, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={Styles.wrapper}>
        <Image source={icon} />
        <Text style={Styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(24)
  },
  label: {
    color: COLORS.black4,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Medium'
  }
})

export default LayananMenu
