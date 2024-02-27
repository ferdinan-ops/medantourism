import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'
import PhoneSwipe from '../../assets/gif/gif'
import Loading from '../molecules/Loading'

const Swipe = ({ action, image, loading }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ gap: 24, width: 288, alignItems: 'center' }}>
            <PhoneSwipe />
            <Text style={styles.text}>Swipe kanan dan kiri untuk menjelajahi map</Text>
            <TouchableOpacity onPress={action} style={styles.btn}>
              {loading && <Loading isAbsolute backgroundColor={COLORS.blue} color={COLORS.white} size="small" />}
              <Text style={styles.btnText}>Oke</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  text: { fontFamily: 'Poppins-SemiBold', fontSize: 24, textAlign: 'center', color: COLORS.white },
  btn: { width: 211, backgroundColor: COLORS.blue, borderRadius: 10, overflow: 'hidden' },
  btnText: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    paddingVertical: 10
  }
})

export default Swipe
