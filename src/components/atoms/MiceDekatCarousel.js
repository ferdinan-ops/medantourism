import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import { getImagePlace } from '../../utils/tranformData'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import StarDisplay from './StarDisplay'
import { useNavigation } from '@react-navigation/native'
import { getDistance } from 'geolib'
import { useSelector } from 'react-redux'
import { storeLastSeen } from '../../services/lastSeen.service'

const Item = ({ image, name, distance, rating, action, isFirst, isLast }) => {
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        isFirst && { marginLeft: horizontalScale(24) },
        isLast && { marginRight: horizontalScale(24) }
      ]}
      onPress={action}
    >
      <ImageBackground
        source={{ uri: image }}
        style={Styles.thumbnail}
        imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <Image source={ICONS.saveCircle} style={Styles.saveButton} />
      </ImageBackground>
      <View style={Styles.metaData}>
        <Text style={Styles.distance}>{distance}</Text>
        <Text style={Styles.name} numberOfLines={2}>
          {name}
        </Text>
        <StarDisplay rating={rating} />
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(199),
    borderRadius: 8
  },
  thumbnail: {
    width: horizontalScale(199),
    height: verticalScale(173),
    objectFit: 'cover'
  },
  saveButton: {
    position: 'absolute',
    top: 6,
    right: 8
  },
  metaData: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
    width: horizontalScale(199),
    alignItems: 'flex-start',
    gap: verticalScale(4)
  },
  distance: {
    color: COLORS.secondary,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Regular'
  },
  name: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium'
  }
})

const MiceDekatCarousel = ({ data }) => {
  const navigation = useNavigation()
  const location = useSelector((state) => state.location.location)

  const distance = (destination) => {
    const distanceInMeters = getDistance(
      {
        latitude: parseFloat(location?.address?.location?.lat),
        longitude: parseFloat(location?.address?.location?.lng)
      },
      { latitude: parseFloat(destination?.lat), longitude: parseFloat(destination?.lng) }
    )
    return (distanceInMeters / 1000).toFixed(1) + ' km'
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <Item
          image={getImagePlace(item.photos[0].photo_reference)}
          name={item.name}
          distance={distance(item.geometry.location)}
          rating={Math.round(item.rating)}
          isFirst={index === 0}
          isLast={index === data.length - 1}
          action={async () => {
            await storeLastSeen({ id: item.place_id, type: item.type })
            navigation.navigate('DetailAdiMulia', { placeId: item.place_id, type: item.type })
          }}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
    />
  )
}

export default MiceDekatCarousel
