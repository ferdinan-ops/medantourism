import { View, Image, StatusBar, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'

const LandingPage = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('TransitionPage')
  }, 1000)

  return (
    <View style={[styles.container, { position: 'relative' }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <Image source={require('../../assets/icons/logo.png')} style={styles.image} />
      <View
        style={{
          backgroundColor: 'rgba(54, 201, 193, 0.2)',
          borderRadius: 204,
          width: 408,
          height: 408,
          position: 'absolute',
          top: 350,
          left: -104
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(236, 140, 111, 0.2)',
          borderRadius: 107,
          width: 215,
          height: 215,
          top: 670,
          left: -170,
          position: 'absolute',
          zIndex: 9999
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: COLORS.white
  },
  text: {
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
    color: COLORS.black3
  },
  image: {
    width: 128,
    height: 128,
    position: 'relative',
    zIndex: 99999
  }
})

export default LandingPage
