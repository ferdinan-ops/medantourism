import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import COLORS from '../../theme/colors'

const LoadingPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black1
      }}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Image source={require('../../assets/gif/loading.gif')} style={{ width: 184, height: 184 }} />
    </View>
  )
}

export default LoadingPage
