import { Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

import CarouselTempatWisata from '../../components/atoms/CarouselTempatWisata'
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton'
import BandaraCarousel from '../../components/atoms/BandaraCarousel'
import HotelCarousel from '../../components/atoms/HotelCarousel'
import Loading from '../../components/molecules/Loading'
import { useGetPlacesQuery } from '../../api/place.api'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SearchPageStyles'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

import { useGetUserQuery } from '../../api/user.api'

const SearchPage = ({ navigation }) => {
  const { data: wisata, isSuccess } = useGetPlacesQuery('nature tour')
  const { data: user } = useGetUserQuery(undefined, { refetchOnMountOrArgChange: true })

  const transformData = (data) => {
    return data.filter((item) => item.photos)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={Styles.headerContainer}>
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
      <ScrollView style={Styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
          </View>
          {isSuccess ? (
            <CarouselTempatWisata wisata={transformData(wisata.results).slice(0, 4)} />
          ) : (
            <Loading size="small" containerStyle={{ paddingVertical: verticalScale(16) }} />
          )}
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Hotel</Text>
            <LihatSemuaButton action={() => navigation.navigate('HomeNavStackScreen', { screen: 'SemuaHotelPage' })} />
          </View>
          <HotelCarousel />
        </View>
        <View style={[Styles.sectionContainer, { marginBottom: verticalScale(77), marginTop: verticalScale(16) }]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Bandara</Text>
            <LihatSemuaButton
              action={() => navigation.navigate('HomeNavStackScreen', { screen: 'SemuaBandaraPage' })}
            />
          </View>
          <BandaraCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchPage
