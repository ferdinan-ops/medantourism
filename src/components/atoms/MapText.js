import { Image, Text, StyleSheet, View } from 'react-native'
import COLORS from '../../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import CtaButton from './CtaButton'

const MapText = ({ top, left, text, action, image }) => {
  return (
    <View style={[Styles.container, { top, left }]}>
      {/* <Image source={image} style={Styles.image} /> */}
      <Image source={{ uri: image }} style={Styles.image} />
      <View style={Styles.info}>
        <Text style={[Styles.mapText, { maxWidth: 150 }]} numberOfLines={1}>
          {text}
        </Text>
        <CtaButton
          text="Lihat"
          action={action}
          backgroundColor={COLORS.blue}
          fColor={COLORS.white}
          hPadding={horizontalScale(6)}
          vPadding={verticalScale(6)}
          borderRadius={8}
          fSize={moderateScale(8)}
          fFamily="Poppins-Bold"
        />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // width: width,
    paddingVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(8),
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    gap: horizontalScale(16),
    flexDirection: 'row'
  },
  mapText: {
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black3
  },
  image: {
    width: horizontalScale(64),
    height: verticalScale(64),
    objectFit: 'cover',
    borderRadius: 12
  },
  info: {
    gap: verticalScale(12)
  }
})

export default MapText
