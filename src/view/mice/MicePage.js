import { Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import RecommendationCarousel from '../../components/atoms/RecommendationCarousel'
import { useGetDekatPlacesQuery, useGetPlacesQuery } from '../../api/place.api'
import MicePopulerCarousel from '../../components/atoms/MicePopulerCarousel'
import MiceDekatCarousel from '../../components/atoms/MiceDekatCarousel'
import { getBookmarks } from '../../services/bookmark.service'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/MicePageStyles'
import Loading from '../../components/molecules/Loading'

const MicePage = ({ navigation }) => {
  // const [isModalVisible, setModalVisible] = useState(false)
  const [recommendation, setRecommendation] = useState([])
  const location = useSelector((state) => state.location.location)

  const { data: popular, isSuccess } = useGetPlacesQuery('convention')
  const { data: dekat, isSuccess: isSuccessDekat } = useGetDekatPlacesQuery({
    keyword: 'convention',
    lat: location.address.location.lat,
    lng: location.address.location.lng
  })

  useEffect(() => {
    const getMiceBookmarks = async () => {
      const bookmarks = await getBookmarks()
      const miceBookmarks = bookmarks.filter((bookmark) => bookmark.type === 'mice')
      setRecommendation(miceBookmarks)
    }
    getMiceBookmarks()
  }, [])

  const transformData = (data) => {
    const results = data.filter((item) => item.photos)
    return results.map((item) => ({ ...item, type: 'mice' }))
  }

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible)
  // }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Populer</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaPopulerMicePage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          {isSuccess ? (
            <MicePopulerCarousel data={transformData(popular.results).slice(0, 4)} />
          ) : (
            <Loading size="small" containerStyle={{ paddingVertical: verticalScale(16) }} />
          )}
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Dekat Dengan Kamu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaDekatMicePage')}>
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
              <TouchableOpacity onPress={() => navigation.navigate('SemuaUntukmuMicePage')}>
                <Text style={Styles.lihatSemua}>Lihat semua</Text>
              </TouchableOpacity>
            </View>
            <RecommendationCarousel data={recommendation} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MicePage
