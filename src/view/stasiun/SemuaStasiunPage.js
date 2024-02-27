import { SafeAreaView, StatusBar, FlatList } from 'react-native'

import { Item } from '../../components/atoms/HotelCarousel'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
import { useGetPlacesQuery } from '../../api/place.api'
import { getImagePlace } from '../../utils/tranformData'
import { storeLastSeen } from '../../services/lastSeen.service'
import Loading from '../../components/molecules/Loading'

const SemuaStasiunPage = ({ navigation }) => {
  const { data, isSuccess } = useGetPlacesQuery('stasiun')

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {!isSuccess ? (
        <Loading size="large" containerStyle={{ paddingVertical: verticalScale(16) }} />
      ) : (
        <FlatList
          data={transformData(data.results)}
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
                await storeLastSeen({ id: item.place_id, type: 'stasiun' })
                navigation.navigate('HomeNavStackScreen', {
                  screen: 'DetailAdiMulia',
                  params: { placeId: item.place_id, type: 'stasiun' }
                })
              }}
            />
          )}
          numColumns={2}
          contentContainerStyle={{ gap: verticalScale(24) }}
          showsVerticalScrollIndicator={false}
          style={Styles.wrapper}
        />
      )}
    </SafeAreaView>
  )
}

export default SemuaStasiunPage
