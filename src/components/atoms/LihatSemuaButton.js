import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'
import { moderateScale } from '../../theme/responsive'

const LihatSemuaButton = ({ action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Text style={Styles.lihatSemua}>Lihat semua</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  lihatSemua: {
    color: COLORS.blue,
    fontSize: moderateScale(12)
  }
})

export default LihatSemuaButton
