import { Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SearchPageStyles'
import { Item } from '../../components/atoms/HotelCarousel'
import ICONS from '../../assets/icons/icons'
import { useGetPlacesQuery } from '../../api/place.api'
import COLORS from '../../theme/colors'
import { getImagePlace } from '../../utils/tranformData'
import { useNavigation } from '@react-navigation/native'
import EmptyState from '../../components/molecules/EmptyState'
import Loading from '../../components/molecules/Loading'
import { useGetUserQuery } from '../../api/user.api'

const ListsHeader = ({ keyword }) => {
  return (
    <View style={[Styles.sectionContainer]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: verticalScale(24)
        }}
      >
        <Text style={Styles.sectionTitle}>
          Pencarian: `<Text style={{ color: COLORS.blue }}>{keyword}</Text>`
        </Text>
      </View>
    </View>
  )
}

const Lists = ({ data, keyword }) => {
  const container = { paddingHorizontal: horizontalScale(24), backgroundColor: COLORS.gray5 }
  const navigation = useNavigation()
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<ListsHeader keyword={keyword} />}
      keyExtractor={(item, index) => index.toString()}
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
              params: { placeId: item.place_id }
            })
          }
        />
      )}
      numColumns={2}
      contentContainerStyle={[container, data.length < 4 && { flex: 1 }]}
      showsVerticalScrollIndicator={false}
    />
  )
}

const SearchListsPage = ({ navigation, route }) => {
  const { data, isSuccess } = useGetPlacesQuery(route.params.query)
  const { data: user } = useGetUserQuery(undefined, { refetchOnMountOrArgChange: true })

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  let content
  if (isSuccess) {
    if (data.results.length === 0) {
      content = (
        <EmptyState
          title="Hmmm... kami tidak dapat menemukan yang kamu cari"
          subTitle="Coba cari dengan keyword lain!"
        />
      )
    } else {
      content = <Lists data={transformData(data.results)} keyword={route.params.query} />
    }
  } else {
    content = (
      <Loading size="large" backgroundColor={COLORS.gray5} containerStyle={{ paddingVertical: verticalScale(16) }} />
    )
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={Styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Image source={ICONS.backButtonBlack} style={{ width: 20, objectFit: 'contain' }} />
        </TouchableOpacity>
        <View style={Styles.inputGroup}>
          <Image source={ICONS.search} style={Styles.icon} />
          <TextInput
            style={Styles.input}
            placeholderTextColor={COLORS.black3}
            placeholder="Cari hotel, flight, dan lainnya..."
            onPressIn={() => navigation.navigate('SearchStackScreen')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image source={{ uri: user?.data?.image_url }} style={Styles.profilePic} />
        </TouchableOpacity>
      </View>
      {content}
    </SafeAreaView>
  )
}

export default SearchListsPage
