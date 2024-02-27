import { SafeAreaView, StatusBar, FlatList } from 'react-native'

import { Item } from '../../components/atoms/HotelCarousel'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
import { useGetPlacesQuery } from '../../api/place.api'
import { getImagePlace } from '../../utils/tranformData'
import Loading from '../../components/molecules/Loading'

const SemuaHotelPage = ({ navigation }) => {
  const { data, isSuccess } = useGetPlacesQuery('hotel')

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: horizontalScale(24) }}>
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
              action={() =>
                navigation.navigate('HomeNavStackScreen', {
                  screen: 'HotelPreviewPage',
                  params: { placeId: item.place_id, type: 'hotel' }
                })
              }
            />
          )}
          numColumns={2}
          contentContainerStyle={{ paddingVertical: verticalScale(32) }}
          showsVerticalScrollIndicator={false}
          style={Styles.wrapper}
        />
      )}
    </SafeAreaView>
  )
}

export default SemuaHotelPage
