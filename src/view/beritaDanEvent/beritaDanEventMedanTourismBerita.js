import { View, Text, SafeAreaView, TextInput, Image, FlatList } from 'react-native'
import { useState } from 'react'

import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard'
import EmptyState from '../../components/molecules/EmptyState'
import Loading from '../../components/molecules/Loading'

import { styles } from '../../styles/beritaDanEventMedanTourismEvent.Style'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

import { newsAdapter, newsSelector, useSearchNewsQuery } from '../../api/news.api'
import { formatTimeAgo, removeHtmlTags } from '../../services/news.service'
import useDebounce from '../../hooks/useDebounce'
import { storeLastSeen } from '../../services/lastSeen.service'

const BeritaDanEventPageMedanTourismEvent = ({ navigation }) => {
  const [keyword, setKeyword] = useState('')
  const [page, setPage] = useState(1)

  const debouncedKeyword = useDebounce(keyword, 500)

  const {
    data: news,
    isLoading,
    isSuccess
  } = useSearchNewsQuery(
    { keyword: debouncedKeyword, page },
    {
      selectFromResult: ({ data, ...otherParams }) => ({
        data: newsSelector.selectAll(data ?? newsAdapter.getInitialState()),
        ...otherParams
      })
    }
  )

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={{ backgroundColor: COLORS.white }}>
        <View style={styles.container}>
          {isSuccess && news.length === 0 ? (
            <EmptyState title="Tidak ada berita" description="Tidak ada berita saat ini" />
          ) : (
            <View style={styles.header}>
              <View style={styles.inputWrapper}>
                <Image source={ICONS.search2} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor={COLORS.black3}
                  placeholder="Cari berita"
                  autoComplete="off"
                  value={keyword}
                  onChange={(e) => setKeyword(e.nativeEvent.text)}
                />
              </View>
              <Text style={styles.title}>MedanTourism News</Text>
            </View>
          )}

          {isLoading ? (
            <Loading size="small" color={COLORS.blue} />
          ) : news.length > 0 ? (
            <FlatList
              data={news}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <BeritaDanEventCard
                  CardHeight={120}
                  cardUri={item.attachment_url}
                  CardTitle={item.title}
                  CardDescription={removeHtmlTags(item.description)}
                  CardDate={formatTimeAgo(item.created_at)}
                  onPress={async () => {
                    await storeLastSeen({ id: item.slug, type: 'eventNews' })
                    navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1', params: { slug: item.slug } })
                  }}
                />
              )}
              onEndReached={() => setPage((prev) => prev + 1)}
              onEndReachedThreshold={0.5}
              contentContainerStyle={{ backgroundColor: COLORS.white }}
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BeritaDanEventPageMedanTourismEvent
