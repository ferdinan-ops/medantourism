import { SafeAreaView, StatusBar, FlatList, StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
import { getImagePlace } from '../../utils/tranformData'
import StarDisplay from '../../components/atoms/StarDisplay'
import COLORS from '../../theme/colors'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import { storeLastSeen } from '../../services/lastSeen.service'
import { getDistanceInfo } from '../../services/location'
import useGetActivity from '../../hooks/useGetActivity'
import Loading from '../../components/molecules/Loading'

const Item = ({ action, width, containerStyle, placeId }) => {
  width = horizontalScale(width)
  const { data } = useGetPlaceDetailQuery(placeId)
  const location = useSelector((state) => state.location.location)

  return (
    <TouchableOpacity style={[styles.container, { width }, containerStyle]} onPress={action}>
      <Image
        source={{ uri: getImagePlace(data?.result?.photos[0]?.photo_reference) }}
        style={[styles.image, { width }]}
      />
      <View style={[styles.details, { width }]}>
        <View style={{ gap: verticalScale(4) }}>
          <Text style={styles.distance}>
            {getDistanceInfo(location?.address?.location, data?.result?.geometry.location)}
          </Text>
          <Text style={styles.subText} numberOfLines={1}>
            {data?.result?.name}
          </Text>
          <StarDisplay rating={Math.round(data?.result?.rating)} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const DisimpanDetailPage = ({ navigation, route }) => {
  const { type, typeActivity } = route.params
  const { data, isLoading } = useGetActivity({ typeActivity, typeDestination: type })

  if (isLoading) {
    return <Loading isAbsolute color={COLORS.blue} size={70} />
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: horizontalScale(24) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Item
            placeId={item.id}
            width={180}
            containerStyle={
              index + (1 % 2) === 0 ? { marginLeft: verticalScale(24) } : { marginRight: verticalScale(24) }
            }
            action={async () => {
              await storeLastSeen({ id: item.id, type })
              navigation.navigate('DetailAdiMulia', { placeId: item.id, type })
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

export default DisimpanDetailPage
