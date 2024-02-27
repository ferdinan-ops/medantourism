import { SafeAreaView, StatusBar, FlatList } from 'react-native'

import { Item } from '../../components/atoms/HotelCarousel'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
import { useGetPlacesQuery } from '../../api/place.api'
import { getImagePlace } from '../../utils/tranformData'
import { storeLastSeen } from '../../services/lastSeen.service'
import Loading from '../../components/molecules/Loading'

const SemuaPopulerMicePage = ({ navigation }) => {
  const { data, isSuccess } = useGetPlacesQuery('convention')

  if (!isSuccess) {
    return <Loading containerStyle={{ paddingVertical: verticalScale(16) }} size="small" />
  }

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  const popular = transformData(data.results)

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: horizontalScale(24) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <FlatList
        data={popular}
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
              await storeLastSeen({ id: item.place_id, type: 'mice' })
              navigation.navigate('DetailAdiMulia', { placeId: item.place_id, type: 'mice' })
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

export default SemuaPopulerMicePage
