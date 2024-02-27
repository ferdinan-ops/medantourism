import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import COLORS from '../theme/colors'

const ProfileMenuBtn = ({ icon, text, action }) => {
  return (
    <TouchableOpacity style={Styles.menuBtn} onPress={action}>
      <View style={Styles.leftSide}>
        <Image source={icon} />
        <Text style={Styles.menuFont}>{text}</Text>
      </View>
      <Image source={require('../assets/icons/next.png')} />
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  menuFont: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black3
  },
  menuBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  }
})

export default ProfileMenuBtn
