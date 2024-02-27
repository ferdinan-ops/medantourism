import { View, ActivityIndicator } from 'react-native'
import COLORS from '../../theme/colors'

const Loading = ({ isAbsolute, backgroundColor, color, size, containerStyle }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor
        },
        isAbsolute && {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1
        },
        containerStyle
      ]}
    >
      <ActivityIndicator color={color || COLORS.blue} size={size} />
    </View>
  )
}

export default Loading
