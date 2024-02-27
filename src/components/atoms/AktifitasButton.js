import { View, TouchableWithoutFeedback, StyleSheet, Text, Image } from 'react-native'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const AktifitasButton = ({ icon, label, action }) => {
  return (
    <TouchableWithoutFeedback style={Styles.container} onPress={action}>
      <View style={Styles.wrapper}>
        <View style={Styles.labelContainer}>
          <Image source={icon} />
          <Text style={Styles.label}>{label}</Text>
        </View>
        <Image source={ICONS.nextLine} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    borderColor: COLORS.secondary
  },
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: horizontalScale(16)
  },
  label: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(16)
  }
})

export default AktifitasButton
