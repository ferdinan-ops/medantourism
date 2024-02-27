import { SafeAreaView, StatusBar, FlatList } from 'react-native'

import { storeLastSeen } from '../../services/lastSeen.service'
import { Item } from '../../components/atoms/HotelCarousel'
import Loading from '../../components/molecules/Loading'
import { getImagePlace } from '../../utils/tranformData'
import { useGetPlacesQuery } from '../../api/place.api'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'

const SemuaBandaraPage = ({ navigation }) => {
  const { data, isSuccess } = useGetPlacesQuery('bandara')

  if (!isSuccess) {
    return <Loading containerStyle={{ paddingVertical: verticalScale(16) }} size="small" />
  }

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  const popular = transformData(data.results)

  return (
    <SafeAreaView style={[Styles.container, { paddingVertical: 0 }]}>
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
              await storeLastSeen({ id: item.place_id, type: 'bandara' })
              navigation.navigate('HomeNavStackScreen', {
                screen: 'DetailAdiMulia',
                params: { placeId: item.place_id, type: 'bandara' }
              })
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

export default SemuaBandaraPage
