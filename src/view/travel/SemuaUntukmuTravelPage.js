import { SafeAreaView, StatusBar, FlatList, StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'

import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
import { getImagePlace } from '../../utils/tranformData'
import { useEffect, useState } from 'react'
import { getBookmarks } from '../../services/bookmark.service'
import StarDisplay from '../../components/atoms/StarDisplay'
import COLORS from '../../theme/colors'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import { useSelector } from 'react-redux'
import { getDistance } from 'geolib'
import { storeLastSeen } from '../../services/lastSeen.service'

const Item = ({ action, width, containerStyle, placeId }) => {
  width = horizontalScale(width)
  const { data } = useGetPlaceDetailQuery(placeId)
  const location = useSelector((state) => state.location.location)

  const getDistanceInfo = (destination) => {
    const distanceInMeters = getDistance(
      {
        latitude: parseFloat(location.address.location.lat),
        longitude: parseFloat(location.address.location.lng)
      },
      { latitude: parseFloat(destination.lat), longitude: parseFloat(destination.lng) }
    )
    return (distanceInMeters / 1000).toFixed(1) + ' km'
  }

  return (
    <TouchableOpacity style={[styles.container, { width }, containerStyle]} onPress={action}>
      <Image
        source={{ uri: getImagePlace(data?.result?.photos[0]?.photo_reference) }}
        style={[styles.image, { width }]}
      />
      <View style={[styles.details, { width }]}>
        <View style={{ gap: verticalScale(4) }}>
          <Text style={styles.distance}>{getDistanceInfo(data?.result?.geometry.location)}</Text>
          <Text style={styles.subText} numberOfLines={1}>
            {data?.result?.name}
          </Text>
          <StarDisplay rating={Math.round(data?.result?.rating)} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const SemuaUntukmuTravelPage = ({ navigation }) => {
  const [recommendation, setRecommendation] = useState([])

  useEffect(() => {
    const getTravelBookmarks = async () => {
      const bookmarks = await getBookmarks()
      const travelBookmarks = bookmarks.filter((bookmark) => bookmark.type === 'travel')
      setRecommendation(travelBookmarks)
    }
    getTravelBookmarks()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: horizontalScale(24) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <FlatList
        data={recommendation}
        renderItem={({ item, index }) => (
          <Item
            placeId={item.id}
            width={180}
            containerStyle={
              index + (1 % 2) === 0 ? { marginLeft: verticalScale(24) } : { marginRight: verticalScale(24) }
            }
            action={async () => {
              await storeLastSeen({ id: item.id, type: 'travel' })
              navigation.navigate('DetailAdiMulia', { placeId: item.id, type: 'travel' })
            }}
          />
        )}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: verticalScale(32) }}
        showsVerticalScrollIndicator={false}
        style={Styles.wrapper}
      />
    </SafeAreaView>
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

export default SemuaUntukmuTravelPage
