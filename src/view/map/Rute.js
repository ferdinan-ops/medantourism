import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { API_KEY } from '../../utils/environtment'
import COLORS from '../../theme/colors'
import { StatusBar } from 'react-native'

const Rute = ({ route }) => {
  const { origin, destination } = route.params

  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        ...origin,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121
      }}
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={API_KEY}
        strokeWidth={10}
        strokeColor={COLORS.blue}
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  )
}

export default Rute
