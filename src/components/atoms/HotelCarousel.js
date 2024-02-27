import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { getDistance } from 'geolib'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import { getImagePlace } from '../../utils/tranformData'
import { useGetPlacesQuery } from '../../api/place.api'
import Loading from '../molecules/Loading'
import COLORS from '../../theme/colors'
import StarDisplay from './StarDisplay'

export const Item = ({ image, name, distance, rating, action, width, containerStyle }) => {
  width = horizontalScale(width)

  const location = useSelector((state) => state.location.location)

  const getDistanceInfo = (destination) => {
    const distanceInMeters = getDistance(
      {
        latitude: parseFloat(location.address.location.lat),
        longitude: parseFloat(location.address.location.lng)
      },
      { latitude: parseFloat(destination?.lat), longitude: parseFloat(destination?.lng) }
    )
    return (distanceInMeters / 1000).toFixed(1) + ' km'
  }

  return (
    <TouchableOpacity style={[styles.container, { width }, containerStyle]} onPress={action}>
      <Image source={{ uri: image }} style={[styles.image, { width }]} />
      <View style={[styles.details, { width }]}>
        <View style={{ gap: verticalScale(4) }}>
          <Text style={styles.distance}>{getDistanceInfo(distance)}</Text>
          <Text style={styles.subText} numberOfLines={1}>
            {name}
          </Text>
          <StarDisplay rating={rating} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const HotelCarousel = () => {
  const Item = ({ isFirst, isLast, action, width, image, distance, name, rating, address }) => {
    width = horizontalScale(width)
    const location = useSelector((state) => state.location.location)

    const getDistanceInfo = (destination) => {
      const distanceInMeters = getDistance(
        {
          latitude: parseFloat(location.address.location.lat),
          longitude: parseFloat(location.address.location.lng)
        },
        { latitude: parseFloat(destination?.lat), longitude: parseFloat(destination?.lng) }
      )
      return (distanceInMeters / 1000).toFixed(1) + ' km'
    }

    return (
      <TouchableOpacity
        style={[
          styles.container,
          { width },
          isFirst && { marginLeft: horizontalScale(24) },
          isLast && { marginRight: horizontalScale(24) }
        ]}
        onPress={action}
      >
        <Image source={{ uri: image }} style={[styles.image, { width }]} />
        <View style={[styles.details, { width }]}>
          <View style={{ gap: verticalScale(4) }}>
            <Text style={styles.distance}>{getDistanceInfo(distance)}</Text>
            <Text style={styles.subText} numberOfLines={1}>
              {name}
            </Text>
            <StarDisplay rating={rating} />
          </View>
          <Text style={{ color: COLORS.black3, fontFamily: 'Poppins-Regular', fontSize: 12 }} numberOfLines={1}>
            {address}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const navigation = useNavigation()

  const { data, isSuccess } = useGetPlacesQuery('hotel')

  if (!isSuccess) {
    return <Loading containerStyle={{ paddingVertical: verticalScale(16) }} size="small" />
  }

  const transformData = (data) => {
    return data.results.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  const hotels = transformData(data).slice(0, 6)

  return (
    <FlatList
      data={hotels}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item
          isFirst={index === 0}
          isLast={index === hotels.length - 1}
          action={() =>
            navigation.navigate('HomeNavStackScreen', {
              screen: 'HotelPreviewPage',
              params: { placeId: item.place_id, type: 'hotel' }
            })
          }
          width={199}
          image={getImagePlace(item.photos[0].photo_reference)}
          name={item.name}
          distance={item.geometry.location}
          price={'540,550'}
          address={item?.vicinity}
          rating={Math.round(item.rating)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(274),
    borderRadius: 16
  },
  image: {
    height: verticalScale(156),
    objectFit: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  details: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    backgroundColor: COLORS.white,
    gap: 10,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
  distance: {
    color: COLORS.secondary,
    fontSize: moderateScale(10)
  },
  subText: { color: COLORS.black3, fontWeight: '500' },
  date: { fontSize: moderateScale(12), fontWeight: '400' }
})

export default HotelCarousel
