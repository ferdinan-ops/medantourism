import { Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { useGetFacebookPostsQuery, useGetInstagramPostsQuery } from '../../api/sosial.api'
import { eventAdapter, eventSelector, useSearchEventsQuery } from '../../api/news.api'
import { useGetUserQuery } from '../../api/user.api'

import { horizontalScale, verticalScale } from '../../theme/responsive'
import EventCarousel from '../../components/atoms/EventCarousel'
import FeedCarousel from '../../components/atoms/FeedCarousel'
import MenuButton from '../../components/atoms/MenuButton'
import Loading from '../../components/molecules/Loading'

import Styles from '../../styles/HomePageStyles'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const HomePage = ({ navigation }) => {
  const location = useSelector((state) => state.location.location)
  const token = useSelector((state) => state.auth.token)
  const { data: user } = useGetUserQuery(undefined, { refetchOnMountOrArgChange: true, skip: !token })

  const { data: facebook, isSuccess: isSuccessFacebook } = useGetFacebookPostsQuery()
  const { data: instagram, isSuccess: isSuccessInstagram } = useGetInstagramPostsQuery()
  const { data: events, isLoading } = useSearchEventsQuery(
    { keyword: '', page: 1 },
    {
      selectFromResult: ({ data, ...otherParams }) => ({
        data: eventSelector.selectAll(data ?? eventAdapter.getInitialState()),
        ...otherParams
      }),
      refetchOnMountOrArgChange: true,
      pollingInterval: 10000
    }
  )

  const handleProtectNav = () => {
    if (token) {
      navigation.navigate('HomeNavStackScreen', { screen: 'NotifikasiPage' })
    } else {
      navigation.navigate('AuthStackScreen')
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.headerContainer}>
          <Image source={require('../../assets/img/homeBackground.png')} style={Styles.background} />
          <View style={Styles.headerButtons}>
            <TouchableOpacity onPress={handleProtectNav}>
              <Image source={ICONS.notif} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={Styles.profilePicWrapper}>
              {token ? (
                <Image source={{ uri: user?.data?.image_url }} style={Styles.profilePic} />
              ) : (
                <Image source={require('../../assets/img/default.jpg')} style={Styles.profilePic} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={Styles.title}>Temukan tempat{'\n'}untuk anda!</Text>
          <View style={Styles.locationContainer}>
            <Image source={ICONS.locationPin} />
            <Text style={[Styles.location, { maxWidth: 150 }]} numberOfLines={1}>
              {location?.address?.detail}
            </Text>
          </View>
        </View>
        <View style={Styles.contentContainer}>
          <View style={Styles.menuContainer}>
            {DATA.map((item, index) => (
              <MenuButton
                key={index}
                icon={item.icons}
                label={item.label}
                action={() => navigation.navigate('HomeNavStackScreen', { screen: item.screen })}
              />
            ))}
          </View>
          {isLoading && !isSuccessFacebook && !isSuccessInstagram ? (
            <Loading size="large" color={COLORS.blue} containerStyle={{ minHeight: 200 }} />
          ) : (
            <>
              {events.length > 0 ? (
                <View style={Styles.eventContainer}>
                  <Text style={Styles.sectionTitle}>Event</Text>
                  <EventCarousel events={events.slice(0, 5)} />
                </View>
              ) : null}
              <View style={Styles.feedContainer}>
                <View style={[Styles.feedTitle, { alignItems: 'center' }]}>
                  <Image
                    source={require('../../assets/icons/instagram.png')}
                    style={{ objectFit: 'contain', height: horizontalScale(26) }}
                  />
                  <Text style={[Styles.sectionTitle, { paddingHorizontal: 0 }]}>Feed Instagram</Text>
                </View>
                <FeedCarousel data={instagram} />
              </View>
              <View style={[Styles.feedContainer, { marginBottom: verticalScale(78) }]}>
                <View style={Styles.feedTitle}>
                  <Image source={ICONS.facebook} style={[Styles.feedIcon, { objectFit: 'contain' }]} />
                  <Text style={[Styles.sectionTitle, { paddingHorizontal: 0 }]}>Postingan Facebook</Text>
                </View>
                <FeedCarousel data={facebook} />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const DATA = [
  { icons: ICONS.travelIcon, label: 'Travel', screen: 'TravelPage' },
  { icons: ICONS.hotelIcon, label: 'Hotel', screen: 'MapHotel' },
  { icons: ICONS.transportIcon, label: 'Transport', screen: 'TransportPage' },
  { icons: ICONS.rekreasiIcon, label: 'Rekreasi', screen: 'MapRekreasi' },
  { icons: ICONS.layananIcon, label: 'Layanan', screen: 'LayananPage' },
  { icons: ICONS.miceIcon, label: 'M I C E', screen: 'MicePage' },
  { icons: ICONS.stasiunIcon, label: 'Stasiun', screen: 'MapStasiun' },
  { icons: ICONS.lainnyaIcon, label: 'Lainnya', screen: 'LainnyaPage' }
]
