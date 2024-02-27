import { TouchableOpacity, Text, Image } from 'react-native'
import Loading from '../molecules/Loading'

const CtaButton = ({
  backgroundColor,
  width,
  borderRadius,
  vPadding,
  hPadding,
  fFamily,
  fSize,
  icon,
  action,
  borderColor,
  borderWidth,
  fColor,
  text,
  isLoading,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      disabled={isLoading}
      style={[
        {
          backgroundColor,
          width,
          borderRadius,
          paddingVertical: vPadding,
          paddingHorizontal: hPadding,
          borderColor,
          borderWidth,
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        },
        style
      ]}
    >
      {isLoading && <Loading isAbsolute backgroundColor={backgroundColor} color={fColor} size="small" />}
      <Image source={icon} />
      <Text style={{ fontSize: fSize, fontFamily: fFamily, color: fColor }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CtaButton
