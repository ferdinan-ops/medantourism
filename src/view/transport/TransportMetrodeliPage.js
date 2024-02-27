import { Image, View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Modal from 'react-native-modal'

import { verticalScale, moderateScale, horizontalScale } from '../../theme/responsive'
import TransportInputGroup from '../../components/atoms/TransportInputGroup.js'
import { styles } from '../../styles/TransportMetrodeli.style'
import KoridorCard from '../../components/atoms/KoridorCard'
import CtaButton from '../../components/atoms/CtaButton'
import IMAGES from '../../assets/img/images'
import COLORS from '../../theme/colors'
import Loading from '../../components/molecules/Loading'
import EmptyState from '../../components/molecules/EmptyState'
import useGetAllKoridor from '../../hooks/useGetAllKoridor'

const TransportMetrodeliPage = () => {
  const [modal, setModal] = useState(false)
  const [searchText, setSearchText] = useState('')
  const navigation = useNavigation()

  const { state: metrodeli, isSuccess, setState: setMetrodeli, initialState } = useGetAllKoridor()

  const handleSearch = (text) => {
    setSearchText(text)
    const filtered = metrodeli.filter(
      (item) =>
        item.corridor.toLowerCase().includes(text.toLowerCase()) ||
        item.origin.toLowerCase().includes(text.toLowerCase()) ||
        item.destination.toLowerCase().includes(text.toLowerCase())
    )
    if (text === '') {
      return setMetrodeli(initialState)
    }
    setMetrodeli(filtered)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.content}>
              <TransportInputGroup
                HeroImage={IMAGES.city}
                Placeholder="Temukan koridor"
                Value={searchText}
                handleChange={(e) => handleSearch(e.nativeEvent.text)}
              />
              <View style={styles.menuWrapper}>
                <View style={styles.menuTitleWrapper}>
                  <View>
                    <Text style={styles.menuTitle}>Pilih halte yang tersedia</Text>
                  </View>
                </View>
                <View>
                  {isSuccess ? (
                    searchText && metrodeli.length === 0 ? (
                      <EmptyState
                        title="Kami tidak dapat menemukan yang kamu cari"
                        subTitle="Coba cari dengan keyword lain!"
                      />
                    ) : (
                      metrodeli.map((item, index) => (
                        <View key={index} style={[styles.menu, styles[item.bgColor]]}>
                          <KoridorCard
                            trekText={`${item.origin} - ${item.destination}`}
                            koridorNumber={item.corridor}
                            halteImage={item.halteImage}
                            action={() =>
                              navigation.navigate('TransportKoridorPage', {
                                koridorId: item.ID,
                                title: item.corridor,
                                index
                              })
                            }
                          />
                        </View>
                      ))
                    )
                  ) : (
                    <Loading size="large" backgroundColor={COLORS.white} />
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <Modal
          isVisible={modal}
          animationIn="slideInDown"
          animationInTiming={700}
          animationOut="slideOutUp"
          animationOutTiming={700}
          style={{ marginHorizontal: -20, marginVertical: 0 }}
        >
          <View style={styles.popUpWrapper}>
            <View style={styles.popUp}>
              <View>
                <Image style={styles.popUpIcon} source={require('../../assets/icons/moreInformation.png')} />
              </View>
              <View style={styles.popUpInformation}>
                <Text style={styles.popUpTitle}>INFORMASI BUS/HALTE METRODELI</Text>
                <Text style={styles.popUpJamOperasiDanTarif}>Jam operasi : 04.30 WIB - 19.41 WIB Tarif : Rp 4.300</Text>
                <CtaButton
                  backgroundColor={COLORS.blue}
                  borderRadius={12}
                  vPadding={verticalScale(12)}
                  hPadding={horizontalScale(82)}
                  fFamily="Poppins-Bold"
                  fSize={moderateScale(16)}
                  fColor={COLORS.white}
                  text="Log In"
                  action={() => setModal(false)}
                  style={{ marginTop: verticalScale(21) }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default TransportMetrodeliPage
