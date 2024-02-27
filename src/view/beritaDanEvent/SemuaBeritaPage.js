import { SafeAreaView, StatusBar, FlatList } from 'react-native'

import Styles from '../../styles/SemuaBeritaPageStyles'
import { useGetNewsOrEventDetailQuery } from '../../api/news.api'
import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard'
import { formatTimeAgo, removeHtmlTags } from '../../services/news.service'
import Loading from '../../components/molecules/Loading'
import COLORS from '../../theme/colors'
import useGetActivity from '../../hooks/useGetActivity'

const SemuaBeritaPage = ({ navigation, route }) => {
  const { typeActivity } = route.params
  const { data, isLoading } = useGetActivity({ typeActivity, typeDestination: 'eventNews' })

  if (isLoading) {
    return <Loading isAbsolute color={COLORS.blue} size={70} />
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item
            slug={item.id}
            onPress={() =>
              navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1', params: { slug: item.id } })
            }
          />
        )}
      />
    </SafeAreaView>
  )
}

const Item = ({ slug, onPress }) => {
  const { data, isLoading } = useGetNewsOrEventDetailQuery(slug)

  if (isLoading) return null

  return (
    <BeritaDanEventCard
      CardHeight={98}
      cardUri={data.attachment_url}
      CardTitle={data.title}
      CardDescription={removeHtmlTags(data.description)}
      CardDate={formatTimeAgo(data.created_at)}
      onPress={onPress}
    />
  )
}

export default SemuaBeritaPage
