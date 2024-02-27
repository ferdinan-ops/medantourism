import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { moderateScale, verticalScale, horizontalScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'
import IMAGES from '../../assets/img/images'

const ImgBtn = ({ icon, action }) => {
  const iconSrc = icon === 'facebook' ? IMAGES.facebook : IMAGES.google

  return (
    <TouchableOpacity onPress={() => action()} style={Styles.imgBtnWrapper}>
      {IMAGES.google && <Image source={iconSrc} style={Styles.imgButton} />}
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  imgButton: {
    height: verticalScale(39),
    width: horizontalScale(40),
    objectFit: 'contain'
  },
  imgBtnWrapper: {
    padding: moderateScale(10),
    borderRadius: 16,
    backgroundColor: COLORS.gray4
  }
})

export default ImgBtn
