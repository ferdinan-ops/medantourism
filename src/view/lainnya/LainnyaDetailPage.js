import { SafeAreaView, StatusBar, FlatList } from 'react-native'

import { Item } from '../../components/atoms/HotelCarousel'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import { useGetPlacesQuery } from '../../api/place.api'
import { getImagePlace } from '../../utils/tranformData'
import { storeLastSeen } from '../../services/lastSeen.service'
import Loading from '../../components/molecules/Loading'
import EmptyState from '../../components/molecules/EmptyState'

const LainnyaDetailPage = ({ navigation, route }) => {
  const { keyword, type } = route.params
  const { data, isSuccess } = useGetPlacesQuery(keyword)

  if (!isSuccess) {
    return <Loading containerStyle={{ paddingVertical: verticalScale(16) }} size="large" />
  }

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  const details = transformData(data.results)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {details.length > 0 ? (
        <FlatList
          data={details}
          renderItem={({ item, index }) => (
            <Item
              image={getImagePlace(item.photos[0].photo_reference)}
              name={item.name}
              distance={item.geometry.location}
              rating={Math.round(item.rating)}
              price={'540,550'}
              width={180}
              containerStyle={
                index + (1 % 2) === 0 ? { marginLeft: verticalScale(24) } : { marginRight: verticalScale(24) }
              }
              action={async () => {
                await storeLastSeen({ id: item.place_id, type })
                navigation.navigate('DetailAdiMulia', { placeId: item.place_id, type })
              }}
            />
          )}
          numColumns={2}
          contentContainerStyle={{ paddingVertical: verticalScale(32), paddingHorizontal: horizontalScale(24) }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState title={`Kami tidak dapat menemukan ${type} ${keyword}`} subTitle="Mohon maaf coba cari yang lain" />
      )}
    </SafeAreaView>
  )
}

export default LainnyaDetailPage
