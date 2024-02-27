import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

import { horizontalScale, moderateScale } from '../../theme/responsive'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const CustomHeader = ({ title, action }) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.title}>{title}</Text>
      <TouchableOpacity onPress={action}>
        <Image source={ICONS.moreInformation} />
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center'
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black4
  }
})

export default CustomHeader
