import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'
import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive'

const MiceHeader = ({ title, action, type }) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.title}>{title}</Text>
      {type === 'mice' && (
        <TouchableOpacity onPress={action}>
          <Image source={ICONS.moreInformation} style={Styles.icon} />
        </TouchableOpacity>
      )}
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
  },
  icon: {
    width: horizontalScale(15),
    height: verticalScale(15)
  }
})

export default MiceHeader
