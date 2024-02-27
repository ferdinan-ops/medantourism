import { View, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import TempatWisataDetailCarousel from '../../components/atoms/TempatWisataDetailCarousel'
import EventDanBeritaCarousel from '../../components/atoms/EventDanBeritaCarousel'
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/TerakhirDilihatPageStyles'
import RecommendationCarousel from '../../components/atoms/RecommendationCarousel'
import EmptyState from '../../components/molecules/EmptyState'
import useGetLastSeen from '../../hooks/useGetLastSeen'
import COLORS from '../../theme/colors'
import Loading from '../../components/molecules/Loading'

const TerakhirDilihatPage = ({ navigation }) => {
  const { data: lastSeen, isLoading } = useGetLastSeen()

  const getTitleData = (data, type) => {
    return data.filter((item) => item.type === type)
  }

  return (
    <SafeAreaView style={[Styles.container, lastSeen.length === 0 && { paddingVertical: 0 }]}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {isLoading && <Loading size={70} color={COLORS.blue} isAbsolute backgroundColor={COLORS.white} />}
      {lastSeen.length > 0 ? (
        <ScrollView style={Styles.wrapper} showsVerticalScrollIndicator={false}>
          {getTitleData(lastSeen, 'hotel').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Hotel</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', {
                      type: 'hotel',
                      title: 'Hotel',
                      typeActivity: 'lastSeen'
                    })
                  }
                />
              </View>
              {/* <HotelCarousel /> */}
              <RecommendationCarousel data={getTitleData(lastSeen, 'hotel')} />
            </View>
          )}

          {getTitleData(lastSeen, 'mice').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>MICE</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', { type: 'mice', title: 'MICE', typeActivity: 'lastSeen' })
                  }
                />
              </View>
              <RecommendationCarousel data={getTitleData(lastSeen, 'mice')} />
            </View>
          )}

          {getTitleData(lastSeen, 'kuliner').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Kuliner</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', {
                      type: 'kuliner',
                      title: 'Kuliner',
                      typeActivity: 'lastSeen'
                    })
                  }
                />
              </View>
              <RecommendationCarousel data={getTitleData(lastSeen, 'kuliner')} />
            </View>
          )}

          {getTitleData(lastSeen, 'heritage').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Heritage</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', {
                      type: 'heritage',
                      title: 'Heritage',
                      typeActivity: 'lastSeen'
                    })
                  }
                />
              </View>
              <RecommendationCarousel data={getTitleData(lastSeen, 'heritage')} />
            </View>
          )}

          {getTitleData(lastSeen, 'rekreasi').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Rekreasi</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', {
                      type: 'rekreasi',
                      title: 'Rekreasi',
                      typeActivity: 'lastSeen'
                    })
                  }
                />
              </View>
              <RecommendationCarousel data={getTitleData(lastSeen, 'rekreasi')} />
            </View>
          )}

          {getTitleData(lastSeen, 'stasiun').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Stasiun</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', {
                      type: 'stasiun',
                      title: 'Stasiun',
                      typeActivity: 'lastSeen'
                    })
                  }
                />
              </View>
              <RecommendationCarousel data={getTitleData(lastSeen, 'stasiun')} />
            </View>
          )}

          {getTitleData(lastSeen, 'eventNews').length > 0 && (
            <View style={Styles.sectionContainer}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Berita & Event</Text>
                <LihatSemuaButton action={() => navigation.navigate('SemuaBeritaPage', { typeActivity: 'lastSeen' })} />
              </View>
              <EventDanBeritaCarousel data={getTitleData(lastSeen, 'eventNews')} />
            </View>
          )}

          {getTitleData(lastSeen, 'travel').length > 0 && (
            <View style={[Styles.sectionContainer, { marginBottom: verticalScale(70) }]}>
              <View style={Styles.sectionTitleContainer}>
                <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
                <LihatSemuaButton
                  action={() =>
                    navigation.navigate('DisimpanDetailPage', {
                      type: 'travel',
                      title: 'Tempat Wisata',
                      typeActivity: 'lastSeen'
                    })
                  }
                />
              </View>
              <TempatWisataDetailCarousel data={getTitleData(lastSeen, 'travel')} />
            </View>
          )}
        </ScrollView>
      ) : (
        <EmptyState
          title="Hmmm... sepertinya kamu belum melihat tempat/berita apapun"
          subTitle="Ayo lihat tempat/berita favoritmu!"
        />
      )}
    </SafeAreaView>
  )
}

export default TerakhirDilihatPage
