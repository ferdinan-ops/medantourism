import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import { getImagePlace } from '../../utils/tranformData'
import { useGetPlacesQuery } from '../../api/place.api'
import StarDisplayDetail from './StarDisplayDetail'
import Loading from '../molecules/Loading'
import COLORS from '../../theme/colors'

const Item = ({ image, name, rating, raters, isFirst, isLast, destination }) => {
  const gap = verticalScale(24)
  const navigation = useNavigation()
  const location = useSelector((state) => state.location.location)

  return (
    <View style={[styles.container, isFirst && { marginLeft: gap }, isLast && { marginRight: gap }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ gap: verticalScale(16) }}>
        <View style={{ gap: verticalScale(4), width: '90%' }}>
          <Text style={{ fontWeight: '700', color: COLORS.black3, maxWidth: 200 }} numberOfLines={1}>
            {name}
          </Text>
          <StarDisplayDetail rating={rating} raters={raters} />
        </View>
        <View style={{ flexDirection: 'row', gap: horizontalScale(16) }}>
          <TouchableOpacity
            style={[styles.primaryBtn]}
            onPress={() =>
              navigation.navigate('HomeNavStackScreen', {
                screen: 'Rute',
                params: {
                  origin: {
                    latitude: parseFloat(location?.address?.location?.lat),
                    longitude: parseFloat(location?.address?.location?.lng)
                  },
                  destination: {
                    latitude: parseFloat(destination?.lat),
                    longitude: parseFloat(destination?.lng)
                  }
                }
              })
            }
          >
            <Text style={{ color: COLORS.white, fontWeight: '700', textAlign: 'center' }}>Rute</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const BandaraCarousel = () => {
  const { data, isSuccess } = useGetPlacesQuery('bandara')

  if (!isSuccess) {
    return <Loading containerStyle={{ paddingVertical: verticalScale(16) }} size="small" />
  }

  const transformData = (data) => {
    return data.results.filter((item) => item.photos && item.rating && item.user_ratings_total)
  }

  const bandara = transformData(data).slice(0, 2)

  return (
    <FlatList
      data={bandara}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item
          image={getImagePlace(item.photos[0].photo_reference)}
          name={item.name}
          rating={Math.round(item.rating)}
          raters={item.user_ratings_total}
          destination={item.geometry.location}
          isFirst={index === 0}
          isLast={index === bandara.length - 1}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12),
    borderRadius: 12,
    backgroundColor: COLORS.white,
    width: horizontalScale(296),
    gap: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  image: {
    width: horizontalScale(83),
    height: verticalScale(83),
    objectFit: 'cover',
    borderRadius: 12
  },
  primaryBtn: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12),
    borderRadius: 8,
    backgroundColor: COLORS.blue
  },
  secondaryBtn: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12)
  }
})

export default BandaraCarousel
