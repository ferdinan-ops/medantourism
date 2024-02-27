import { View, Image, Text } from 'react-native'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { moderateScale } from '../../theme/responsive'

const StarDisplay = ({ rating }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
      <Image source={ICONS.star} />
      <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>{rating}</Text>
    </View>
  )
}

export default StarDisplay
