import { Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import MicePopulerCarousel from '../../components/atoms/MicePopulerCarousel'
import MiceDekatCarousel from '../../components/atoms/MiceDekatCarousel'
import Styles from '../../styles/MicePageStyles'
import { useGetDekatPlacesQuery, useGetPlacesQuery } from '../../api/place.api'
import { verticalScale } from '../../theme/responsive'
import { useSelector } from 'react-redux'
import { getBookmarks } from '../../services/bookmark.service'
import RecommendationCarousel from '../../components/atoms/RecommendationCarousel'
import Loading from '../../components/molecules/Loading'

const TravelPage = ({ navigation }) => {
  const [recommendation, setRecommendation] = useState([])
  const location = useSelector((state) => state.location.location)

  const { data: popular, isSuccess: isSuccessPopular } = useGetPlacesQuery('wisata populer')
  const { data: dekat, isSuccess: isSuccessDekat } = useGetDekatPlacesQuery({
    keyword: 'wisata populer',
    lat: location.address.location.lat,
    lng: location.address.location.lng
  })

  useEffect(() => {
    const getTravelBookmarks = async () => {
      const bookmarks = await getBookmarks()
      const travelBookmarks = bookmarks.filter((bookmark) => bookmark.type === 'travel')
      setRecommendation(travelBookmarks)
    }
    getTravelBookmarks()
  }, [])

  const transformData = (data) => {
    const results = data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
    return results.map((item) => ({ ...item, type: 'travel' }))
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Populer</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaPopulerTravelPage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          {isSuccessPopular ? (
            <MicePopulerCarousel data={transformData(popular.results).slice(0, 4)} />
          ) : (
            <Loading size="small" containerStyle={{ paddingVertical: verticalScale(16) }} />
          )}
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Dekat Dengan Kamu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaDekatTravelPage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          {isSuccessDekat ? (
            <MiceDekatCarousel data={transformData(dekat.results).slice(0, 4)} />
          ) : (
            <Loading size="small" containerStyle={{ paddingVertical: verticalScale(16) }} />
          )}
        </View>
        {recommendation.length > 0 && (
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>Untuk Kamu</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SemuaUntukmuTravelPage')}>
                <Text style={Styles.lihatSemua}>Lihat semua</Text>
              </TouchableOpacity>
            </View>
            <RecommendationCarousel data={recommendation.slice(0, 4)} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default TravelPage
