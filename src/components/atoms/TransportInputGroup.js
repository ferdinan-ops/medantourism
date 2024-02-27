import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'

const TransportInputGroup = ({ HeroImage, Placeholder, Value, handleChange }) => {
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
              value={Value}
              onChange={handleChange}
              style={{ color: COLORS.black1 }}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchIconWrapper}>
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
    width: 184,
    height: 183
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
    backgroundColor: '#36C9C1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})

export default TransportInputGroup
