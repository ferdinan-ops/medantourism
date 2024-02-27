import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const KategoriPencarian = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={Styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={Styles.wrapper}>
        <View style={Styles.top}>
          <TouchableOpacity
            style={Styles.box}
            onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'TravelPage' })}
          >
            <Image source={ICONS.jalan} style={{ width: 25 }} />
            <Text style={Styles.text}>Travel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.box}
            onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'SemuaHotelPage' })}
          >
            <Image source={ICONS.kasur} style={{ width: 25 }} />
            <Text style={Styles.text}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.box}
            onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'TransportPage' })}
          >
            <Image source={ICONS.bus} style={{ width: 25 }} />
            <Text style={Styles.text}>Perjalanan</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottom}>
          <TouchableOpacity
            style={Styles.box}
            onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'LayananPage' })}
          >
            <Image source={ICONS.headphone} style={{ width: 25 }} />
            <Text style={Styles.text}>Layanan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.box}
            onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'MicePage' })}
          >
            <Image source={ICONS.gedung} style={{ width: 25 }} />
            <Text style={Styles.text}>M I C E</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.box}
            onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'SemuaStasiunPage' })}
          >
            <Image source={ICONS.kereta} style={{ width: 25 }} />
            <Text style={Styles.text}>Stasiun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 16,
    flexWrap: 'wrap'
  },
  box: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 12
  },
  text: {
    color: COLORS.black3,
    fontWeight: '500'
  },
  top: {
    gap: 16,
    flexDirection: 'row'
  },
  bottom: {
    gap: 16,
    flexDirection: 'row'
  },
  wrapper: {
    gap: 16
  }
})

export default KategoriPencarian
