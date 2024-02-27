import { View, Image, Text } from 'react-native'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { moderateScale } from '../../theme/responsive'

const StarDisplayDetail = ({ rating, raters }) => {
  if (rating === 1) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>{rating}</Text>
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>({raters})</Text>
      </View>
    )
  } else if (rating === 2) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>{rating}</Text>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>({raters})</Text>
      </View>
    )
  } else if (rating === 3) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>{rating}</Text>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>({raters})</Text>
      </View>
    )
  } else if (rating === 4) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>{rating}</Text>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>({raters})</Text>
      </View>
    )
  } else if (rating === 5) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>{rating}</Text>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Text style={{ color: COLORS.black3, fontSize: moderateScale(10), fontWeight: '500' }}>({raters})</Text>
      </View>
    )
  }
}

export const StarOnlyDisplay = ({ rating }) => {
  if (rating === 1) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
      </View>
    )
  } else if (rating === 2) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
      </View>
    )
  } else if (rating === 3) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
        <Image source={ICONS.starEmpty} />
      </View>
    )
  } else if (rating === 4) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.starEmpty} />
      </View>
    )
  } else if (rating === 5) {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
        <Image source={ICONS.star} />
      </View>
    )
  }
}

export default StarDisplayDetail
