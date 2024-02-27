import { View, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import TempatWisataDetailCarousel from '../../components/atoms/TempatWisataDetailCarousel'
import EventDanBeritaCarousel from '../../components/atoms/EventDanBeritaCarousel'
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/DisimpanPageStyles'
import RecommendationCarousel from '../../components/atoms/RecommendationCarousel'
import EmptyState from '../../components/molecules/EmptyState'
import { useNavigation } from '@react-navigation/native'
import useGetBookmarks from '../../hooks/useGetBookmarks'
import COLORS from '../../theme/colors'
import Loading from '../../components/molecules/Loading'

const DisimpanLists = ({ recommendation }) => {
  const navigation = useNavigation()
  const getTitleData = (data, type) => {
    return data.filter((item) => item.type === type)
  }

  return (
    <ScrollView style={Styles.wrapper} showsVerticalScrollIndicator={false}>
      {getTitleData(recommendation, 'hotel').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Hotel</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', { type: 'hotel', title: 'Hotel', typeActivity: 'bookmark' })
              }
            />
          </View>
          {/* <HotelCarousel /> */}
          <RecommendationCarousel data={getTitleData(recommendation, 'hotel')} />
        </View>
      )}

      {getTitleData(recommendation, 'mice').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>MICE</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', { type: 'mice', title: 'MICE', typeActivity: 'bookmark' })
              }
            />
          </View>
          <RecommendationCarousel data={getTitleData(recommendation, 'mice')} />
        </View>
      )}

      {getTitleData(recommendation, 'rekreasi').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Rekreasi</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', {
                  type: 'rekreasi',
                  title: 'Rekreasi',
                  typeActivity: 'bookmark'
                })
              }
            />
          </View>
          <RecommendationCarousel data={getTitleData(recommendation, 'rekreasi')} />
        </View>
      )}

      {getTitleData(recommendation, 'kuliner').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Kuliner</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', {
                  type: 'kuliner',
                  title: 'Kuliner',
                  typeActivity: 'bookmark'
                })
              }
            />
          </View>
          <RecommendationCarousel data={getTitleData(recommendation, 'kuliner')} />
        </View>
      )}

      {getTitleData(recommendation, 'heritage').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Heritage</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', {
                  type: 'heritage',
                  title: 'Heritage',
                  typeActivity: 'bookmark'
                })
              }
            />
          </View>
          <RecommendationCarousel data={getTitleData(recommendation, 'heritage')} />
        </View>
      )}

      {getTitleData(recommendation, 'stasiun').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Stasiun</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', {
                  type: 'stasiun',
                  title: 'Stasiun',
                  typeActivity: 'bookmark'
                })
              }
            />
          </View>
          <RecommendationCarousel data={getTitleData(recommendation, 'stasiun')} />
        </View>
      )}

      {getTitleData(recommendation, 'eventNews').length > 0 && (
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Berita & Event</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaBeritaPage', { typeActivity: 'bookmark' })} />
          </View>
          <EventDanBeritaCarousel data={getTitleData(recommendation, 'eventNews')} />
        </View>
      )}

      {getTitleData(recommendation, 'travel').length > 0 && (
        <View style={[Styles.sectionContainer, { marginBottom: verticalScale(70) }]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
            <LihatSemuaButton
              action={() =>
                navigation.navigate('DisimpanDetailPage', {
                  type: 'travel',
                  title: 'Tempat Wisata',
                  typeActivity: 'bookmark'
                })
              }
            />
          </View>
          <TempatWisataDetailCarousel data={getTitleData(recommendation, 'travel')} />
        </View>
      )}
    </ScrollView>
  )
}

const DisimpanPage = () => {
  const { data: bookmarks, isLoading } = useGetBookmarks()

  return (
    <SafeAreaView style={[Styles.container, bookmarks.length === 0 && { paddingVertical: 0 }]}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {isLoading && <Loading size={70} color={COLORS.blue} isAbsolute backgroundColor={COLORS.white} />}
      {bookmarks.length > 0 ? (
        <DisimpanLists recommendation={bookmarks} />
      ) : (
        <EmptyState
          title="Hmmm... sepertinya kamu belum menyimpan apapun"
          subTitle="Ayo simpan tempat/berita favoritmu!"
        />
      )}
    </SafeAreaView>
  )
}

export default DisimpanPage
