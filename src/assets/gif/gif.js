import { Image } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'

const PhoneSwipe = () => {
  return (
    <Image
      style={{ width: horizontalScale(288), height: verticalScale(266) }}
      source={require('../gif/phoneSwipe.gif')}
    />
  )
}

export default PhoneSwipe
