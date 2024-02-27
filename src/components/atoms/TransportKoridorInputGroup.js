import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles as GLOBAL_STYLES } from '../../styles/TransportMetrodeli.style'
import COLORS from '../../theme/colors'

const TransportKoridorInputGroup = ({ HeroImage, Placeholder, Value, index, handleChange }) => {
  return (
    <View style={styles.hero}>
      <View>
        <Image style={styles.city} source={HeroImage} />
      </View>
      <View style={styles.box}>
        <View style={styles.inputGroup}>
          <View>
            <TextInput
              placeholder={Placeholder}
              placeholderTextColor={COLORS.black3}
              style={{ color: COLORS.black1 }}
              value={Value}
              onChange={handleChange}
            />
          </View>
          <View>
            <TouchableOpacity style={[styles.searchIconWrapper, GLOBAL_STYLES[`menu${index + 1}`]]}>
              <Image source={require('../../assets/icons/search.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    marginTop: -200
  },
  city: {
    width: 304,
    height: 157
  },
  box: {
    width: '100%',
    height: 107,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 243, 244, 1)',
    borderRadius: 24,
    marginTop: -25,
    paddingHorizontal: 22
  },
  inputGroup: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    height: 53,
    paddingHorizontal: 15
  },
  searchIconWrapper: {
    width: 56,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})

export default TransportKoridorInputGroup
