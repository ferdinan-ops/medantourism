import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import CarouselBeritaDanEvent from '../../components/atoms/CarouselBeritaDanEvent'
import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard'
import Loading from '../../components/molecules/Loading'

import { styles } from '../../styles/beritaDanEventPage.Style'
import COLORS from '../../theme/colors'

import { formatTimeAgo, removeHtmlTags } from '../../services/news.service'
import {
  eventAdapter,
  eventSelector,
  newsAdapter,
  newsSelector,
  useSearchEventsQuery,
  useSearchNewsQuery
} from '../../api/news.api'
import EmptyState from '../../components/molecules/EmptyState'
import { storeLastSeen } from '../../services/lastSeen.service'

const BeritaDanEventPage = ({ navigation }) => {
  const { data: news, isLoading: isLoadingNews } = useSearchNewsQuery(
    { keyword: '', page: 1 },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 10000,
      selectFromResult: ({ data, ...otherParams }) => ({
        data: newsSelector.selectAll(data ?? newsAdapter.getInitialState()),
        ...otherParams
      })
    }
  )

  const { data: events, isLoading: isLoadingEvents } = useSearchEventsQuery(
    { keyword: '', page: 1 },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 10000,
      selectFromResult: ({ data, ...otherParams }) => ({
        data: eventSelector.selectAll(data ?? eventAdapter.getInitialState()),
        ...otherParams
      })
    }
  )

  const handleSeeAll = (screen) => {
    navigation.navigate('HomeNavStackScreen', { screen })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { paddingTop: 20 }]}>
          <Text style={styles.title}>MedanTourism Event</Text>
          <TouchableOpacity onPress={() => handleSeeAll('BeritaDanEventPageMedanTourismEvent')}>
            {events.length > 0 ? <Text style={styles.lihatSemua}>Lihat semua</Text> : null}
          </TouchableOpacity>
        </View>
        {isLoadingEvents ? (
          <Loading size="small" color={COLORS.blue} />
        ) : events.length > 0 ? (
          <CarouselBeritaDanEvent events={events.slice(0, 5)} />
        ) : (
          <EmptyState subTitle="Belum ada Event" isNotPage />
        )}

        <View style={[styles.body, { paddingVertical: 20 }]}>
          <View style={styles.header}>
            <Text style={styles.title}>MedanTourism News</Text>
            <TouchableOpacity onPress={() => handleSeeAll('BeritaDanEventPageMedanTourismBerita')}>
              {news.length > 0 ? <Text style={styles.lihatSemua}>Lihat semua</Text> : null}
            </TouchableOpacity>
          </View>
          {isLoadingNews ? (
            <Loading size="small" color={COLORS.blue} />
          ) : news.length > 0 ? (
            <View style={styles.cardWrapper}>
              {news.slice(0, 5).map((item, index) => (
                <BeritaDanEventCard
                  key={index}
                  CardHeight={98}
                  cardUri={item.attachment_url}
                  CardTitle={item.title}
                  CardDescription={removeHtmlTags(item.description)}
                  CardDate={formatTimeAgo(item.created_at)}
                  onPress={async () => {
                    await storeLastSeen({ id: item.slug, type: 'eventNews' })
                    navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1', params: { slug: item.slug } })
                  }}
                />
              ))}
            </View>
          ) : (
            <EmptyState subTitle="Belum ada News" isNotPage />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BeritaDanEventPage
