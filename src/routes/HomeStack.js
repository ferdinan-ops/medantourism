import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ICONS from '../assets/icons/icons'
import COLORS from '../theme/colors'

import { Image, TouchableOpacity, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '../view/home/HomePage'
import SearchPage from '../view/search/SearchPage'
import AktifitasPage from '../view/aktifitas/AktifitasPage'
import ProfilePage from '../view/profile/ProfilePage'
import BeritaDanEventPage from '../view/beritaDanEvent/beritaDanEventPage'
import BeritaDanEventPageMedanTourismEvent from '../view/beritaDanEvent/beritaDanEventMedanTourismEvent'
import BeritaDanEventPageMedanTourismBerita from '../view/beritaDanEvent/beritaDanEventMedanTourismBerita'
import eventDetail1 from '../view/beritaDanEvent/eventDetail'

import SearchHistoryPage from '../view/search/SeachHistoryPage'

import TransportPage from '../view/transport/TransportPage'
import TransportMetrodeliPage from '../view/transport/TransportMetrodeliPage'
import TransportKoridorPage from '../view/transport/TransportKoridorPage'
import NotifikasiPage from '../view/notifikasi/NotifikasiPage'
import AturAkunPage from '../view/aturAkun/AturAkunPage'
import HubungkanAkunPage from '../view/aturAkun/HubungkanAkunPage'
import HapusAkunPage from '../view/aturAkun/HapusAkunPage'
import { horizontalScale, moderateScale, verticalScale } from '../theme/responsive'
import LainnyaPage from '../view/lainnya/LainnyaPage'
import DisimpanPage from '../view/aktifitas/DisimpanPage'
import LayananPage from '../view/layanan/LayananPage'
import MicePage from '../view/mice/MicePage'
import GlobalStyles from '../styles/GlobalStyles'
import MiceHeader from '../components/atoms/MiceHeader'
import TerakhirDilihatPage from '../view/aktifitas/TerakhirDilihatPage'
import HotelPreviewPage from '../view/Hotel/HotelPreviewPage'
import SemuaHotelPage from '../view/Hotel/SemuaHotelPage'
import SemuaBeritaPage from '../view/beritaDanEvent/SemuaBeritaPage'
import MapHotel from '../view/map/MapHotel'
import MapMice from '../view/map/MapMice'
import MapRekreasi from '../view/map/MapRekreasi'
import MapKuliner from '../view/map/MapKuliner'
import MapHeritage from '../view/map/MapHeritage'
import MapStasiun from '../view/map/MapStasiun'
import SemuaPopulerMicePage from '../view/mice/SemuaPopulerMice'
import SemuaDekatMicePage from '../view/mice/SemuaDekatMicePage'
import SemuaUntukmuMicePage from '../view/mice/SemuaUntukmuMicePage'
import SemuaTempatWisataPage from '../view/wisata/semuaTempatWisata'
import IMAGES from '../assets/img/images'
import DetailAdiMulia from '../view/map/DetailAdiMulia'
import TravelPage from '../view/travel/TravelPage'
import SemuaPopulerTravelPage from '../view/travel/SemuaPopulerTravelPage'
import SemuaDekatTravelPage from '../view/travel/SemuaDekatTravelPage'
import SemuaUntukmuTravelPage from '../view/travel/SemuaUntukmuTravelPage'
import Rute from '../view/map/Rute'
import { getBookmarks, storeBookmarks } from '../services/bookmark.service'
import { useEffect, useState } from 'react'
import SemuaBandaraPage from '../view/bandara/SemuaBandaraPage'
import SemuaStasiunPage from '../view/stasiun/SemuaStasiunPage'
import SearchListsPage from '../view/search/SearchListsPage'
import LainnyaDetailPage from '../view/lainnya/LainnyaDetailPage'
import DisimpanDetailPage from '../view/aktifitas/DisimpanDetailPage'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/molecules/LoadingPage'
import LocationPermission from '../services/LocationPermission'

const HomeTabStack = createBottomTabNavigator()
const HomeNavStack = createNativeStackNavigator()

const BackButton = ({ action }) => {
  return (
    <TouchableOpacity onPress={action} style={{ paddingTop: verticalScale(57), paddingLeft: horizontalScale(24) }}>
      <Image source={IMAGES.backButton} />
    </TouchableOpacity>
  )
}

const MapDetailHeader = ({ action, route, navigation }) => {
  const [isBookmarks, setIsBookmarks] = useState(false)
  const token = useSelector((state) => state.auth.token)

  const handleBookmark = async () => {
    if (route.params) {
      if (token) {
        const status = await storeBookmarks({ id: route.params.placeId, type: route.params.type })
        setIsBookmarks(status)
      } else {
        navigation.navigate('AuthStackScreen')
      }
    }
  }

  useEffect(() => {
    const checkBookmarks = async () => {
      const bookmarks = await getBookmarks()
      if (bookmarks) {
        const index = bookmarks.findIndex(
          (bookmark) => bookmark.id === route.params.placeId && bookmark.type === route.params.type
        )

        if (index !== -1) {
          setIsBookmarks(true)
        } else {
          setIsBookmarks(false)
        }
      }
    }
    checkBookmarks()
  }, [isBookmarks])

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(26),
        // height: verticalScale(114)
        paddingTop: verticalScale(42),
        paddingBottom: verticalScale(22)
      }}
    >
      <View style={{ flexDirection: 'row', gap: horizontalScale(32), alignItems: 'center' }}>
        <TouchableOpacity onPress={action}>
          <Image source={ICONS.backButtonBlack} style={{ width: horizontalScale(24), objectFit: 'contain' }} />
        </TouchableOpacity>
        <Text style={{ color: COLORS.black4, fontSize: moderateScale(20), fontFamily: 'Poppins-Bold' }}>Detail</Text>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(130, 130, 130, 0.50)',
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: horizontalScale(14),
          paddingVertical: verticalScale(13)
        }}
        onPress={handleBookmark}
      >
        <Image
          source={isBookmarks ? ICONS.saveButtonFill : ICONS.saveButton}
          style={{ height: verticalScale(25), objectFit: 'contain' }}
        />
      </TouchableOpacity>
    </View>
  )
}

export const HomeNavStackScreen = ({ navigation }) => {
  const token = useSelector((state) => state.auth.token)

  return (
    <HomeNavStack.Navigator>
      <HomeNavStack.Screen
        name="TransportPage"
        component={TransportPage}
        options={{
          title: 'Transportasi',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="TransportMetrodeliPage"
        component={TransportMetrodeliPage}
        options={{
          title: 'Bus Metrodeli',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="TransportKoridorPage"
        component={TransportKoridorPage}
        options={({ route }) => {
          return {
            title: route.params.title,
            headerShadowVisible: false,
            headerTitleStyle: GlobalStyles.HeaderBarTItle
          }
        }}
      />
      {token && (
        <>
          <HomeNavStack.Screen
            name="NotifikasiPage"
            component={NotifikasiPage}
            options={{
              title: 'Notifikasi',
              headerShadowVisible: false,
              headerTitleStyle: GlobalStyles.HeaderBarTItle
            }}
          />
          <HomeNavStack.Screen
            name="AturAkunPage"
            component={AturAkunPage}
            options={{
              title: 'Atur Akun',
              headerShadowVisible: false,
              headerTitleStyle: GlobalStyles.HeaderBarTItle
            }}
          />
          <HomeNavStack.Screen
            name="HubungkanAkunPage"
            component={HubungkanAkunPage}
            options={{
              title: 'Hubungkan Akun',
              headerShadowVisible: false,
              headerTitleStyle: GlobalStyles.HeaderBarTItle
            }}
          />
          <HomeNavStack.Screen
            name="HapusAkunPage"
            component={HapusAkunPage}
            options={{
              title: 'Hapus Permanen Akun',
              headerShadowVisible: false,
              headerTitleStyle: GlobalStyles.HeaderBarTItle
            }}
          />
        </>
      )}
      <HomeNavStack.Screen
        name="LainnyaPage"
        component={LainnyaPage}
        options={{
          title: 'Lainnya',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="BeritaDanEventPage"
        component={BeritaDanEventPage}
        options={{
          title: 'Berita & Event',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="BeritaDanEventPageMedanTourismEvent"
        component={BeritaDanEventPageMedanTourismEvent}
        options={{
          title: 'Lihat semua',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="BeritaDanEventPageMedanTourismBerita"
        component={BeritaDanEventPageMedanTourismBerita}
        options={{
          title: 'Lihat semua',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen name="eventDetail1" component={eventDetail1} options={{ headerShown: false }} />
      {token && (
        <HomeNavStack.Screen
          name="DisimpanPage"
          component={DisimpanPage}
          options={{
            title: 'Disimpan',
            headerShadowVisible: false,
            headerTitleStyle: GlobalStyles.HeaderBarTItle
          }}
        />
      )}
      <HomeNavStack.Screen
        name="LayananPage"
        component={LayananPage}
        options={{
          title: 'Layanan',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="MicePage"
        component={MicePage}
        options={{
          title: 'M I C E',
          headerShadowVisible: false,
          headerTitle: () => <MiceHeader title="M I C E" />
        }}
      />
      <HomeNavStack.Screen
        name="TravelPage"
        component={TravelPage}
        options={{
          title: 'Travel',
          headerShadowVisible: false,
          headerTitle: () => <MiceHeader title="Travel" />
        }}
      />
      <HomeNavStack.Screen
        name="TerakhirDilihatPage"
        component={TerakhirDilihatPage}
        options={{
          title: 'Terakhir Dilihat',
          headerShadowVisible: false,
          headerTitleStyle: GlobalStyles.HeaderBarTItle
        }}
      />
      <HomeNavStack.Screen
        name="HotelPreviewPage"
        component={HotelPreviewPage}
        options={{
          header: () => <BackButton action={() => navigation.goBack()} />,
          headerTransparent: true
        }}
      />
      <HomeNavStack.Screen
        name="SemuaHotelPage"
        component={SemuaHotelPage}
        options={{
          title: 'Hotel',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaBandaraPage"
        component={SemuaBandaraPage}
        options={{
          title: 'Bandara',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaStasiunPage"
        component={SemuaStasiunPage}
        options={{
          title: 'Stasiun',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaBeritaPage"
        component={SemuaBeritaPage}
        options={{
          title: 'Berita & Event',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen name="MapHotel" component={MapHotel} options={{ headerShown: false }} />
      <HomeNavStack.Screen name="MapMice" component={MapMice} options={{ headerShown: false }} />
      <HomeNavStack.Screen name="MapRekreasi" component={MapRekreasi} options={{ headerShown: false }} />
      <HomeNavStack.Screen name="MapKuliner" component={MapKuliner} options={{ headerShown: false }} />
      <HomeNavStack.Screen name="MapHeritage" component={MapHeritage} options={{ headerShown: false }} />
      <HomeNavStack.Screen name="MapStasiun" component={MapStasiun} options={{ headerShown: false }} />
      <HomeNavStack.Screen
        name="SemuaPopulerMicePage"
        component={SemuaPopulerMicePage}
        options={{
          title: 'M I C E Populer',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaDekatMicePage"
        component={SemuaDekatMicePage}
        options={{
          title: 'M I C E dekat dengan kamu',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaUntukmuMicePage"
        component={SemuaUntukmuMicePage}
        options={{
          title: 'M I C E untuk kamu',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaPopulerTravelPage"
        component={SemuaPopulerTravelPage}
        options={{
          title: 'Travel Populer',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaDekatTravelPage"
        component={SemuaDekatTravelPage}
        options={{
          title: 'Travel dekat dengan kamu',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="SemuaUntukmuTravelPage"
        component={SemuaUntukmuTravelPage}
        options={{
          title: 'Travel untuk kamu',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="LainnyaDetailPage"
        component={LainnyaDetailPage}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        })}
      />
      {token && (
        <HomeNavStack.Screen
          name="DisimpanDetailPage"
          component={DisimpanDetailPage}
          options={({ route }) => ({
            title: route.params.title,
            headerTitleStyle: GlobalStyles.HeaderBarTItle,
            headerShadowVisible: false
          })}
        />
      )}
      <HomeNavStack.Screen
        name="Rute"
        component={Rute}
        options={{
          title: 'Map',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen name="SearchListsPage" component={SearchListsPage} options={{ headerShown: false }} />
      <HomeNavStack.Screen
        name="SemuaTempatWisataPage"
        component={SemuaTempatWisataPage}
        options={{
          title: 'Tempat Wisata',
          headerTitleStyle: GlobalStyles.HeaderBarTItle,
          headerShadowVisible: false
        }}
      />
      <HomeNavStack.Screen
        name="DetailAdiMulia"
        component={DetailAdiMulia}
        options={({ route }) => ({
          headerShadowVisible: false,
          header: () => <MapDetailHeader action={() => navigation.goBack()} route={route} navigation={navigation} />
          // headerShown: false
        })}
      />
    </HomeNavStack.Navigator>
  )
}

const HomeStackScreen = () => {
  const location = useSelector((state) => state.location.location)

  if (!location) {
    LocationPermission()
    return <LoadingPage />
  }

  return (
    <HomeTabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName

          if (route.name === 'HomePage') {
            iconName = focused ? ICONS.homeActive : ICONS.home
          } else if (route.name === 'SearchPage') {
            iconName = focused ? ICONS.searchActive : ICONS.search
          } else if (route.name === 'AktifitasPage') {
            iconName = focused ? ICONS.perjalananActive : ICONS.perjalanan
          } else if (route.name === 'BeritaDanEventPage') {
            iconName = focused ? ICONS.newsActive : ICONS.news
          } else if (route.name === 'ProfilePage') {
            iconName = focused ? ICONS.profileActive : ICONS.profile
          }
          return <Image source={iconName} style={{ width: horizontalScale(30), height: verticalScale(30) }} />
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          // paddingVertical: 13,
          paddingHorizontal: 26,
          height: 69,
          elevation: 0
        }
      })}
    >
      <HomeTabStack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false
        }}
      />
      <HomeTabStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          headerShown: false
        }}
      />
      <HomeTabStack.Screen
        name="AktifitasPage"
        component={AktifitasPage}
        options={{
          title: 'Aktivitas',
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(20),
            color: COLORS.black4
          }
        }}
      />
      <HomeTabStack.Screen
        name="BeritaDanEventPage"
        component={BeritaDanEventPage}
        options={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold'
          },
          title: 'Berita & Event',
          headerShown: true
        }}
      />
      <HomeTabStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false
        }}
      />
    </HomeTabStack.Navigator>
  )
}

const SearchStack = createNativeStackNavigator()

export const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchHistoryPage"
        component={SearchHistoryPage}
        options={{
          title: 'Pencarian',
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: COLORS.black4,
            fontSize: 20,
            fontWeight: '700'
          }
        }}
      />
    </SearchStack.Navigator>
  )
}

export default HomeStackScreen
