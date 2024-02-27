import { Image, View, Text, Platform, SafeAreaView, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'

import { verticalScale, moderateScale, horizontalScale } from '../../theme/responsive.js'
import TransportInputGroup from '../../components/atoms/TransportInputGroup.js'
import CtaButton from '../../components/atoms/CtaButton.js'
import { styles } from '../../styles/Transport.style.js'
import IMAGES from '../../assets/img/images.js'
import COLORS from '../../theme/colors.js'
import { useState } from 'react'
import EmptyState from '../../components/molecules/EmptyState.js'

const TransportPage = ({ navigation }) => {
  const [searchText, setSearchText] = useState('')
  const [transportasi, setTransportasi] = useState(['Bus Metrodeli'])

  const handleSearch = (text) => {
    setSearchText(text)
    const filtered = transportasi.filter((item) => item.toLowerCase().includes(text.toLowerCase()))
    if (text === '') {
      return setTransportasi(['Bus Metrodeli'])
    }
    setTransportasi(filtered)
  }

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <TransportInputGroup
              HeroImage={IMAGES.city}
              HeroImageWidth={184}
              Value={searchText}
              handleChange={(e) => handleSearch(e.nativeEvent.text)}
              HeroImageHeight={183}
              Placeholder="Cari Transportasi"
            />
            <View style={styles.menuWrapper}>
              <View>
                <Text style={styles.menuTitle}>Pilih jenis transportasi anda</Text>
              </View>
              <View style={{ flex: 1 }}>
                {searchText && transportasi.length === 0 ? (
                  <View
                    style={{
                      marginTop: 24,
                      paddingLeft: 24,
                      paddingVertical: 30,
                      flex: 1,
                      position: 'relative'
                    }}
                  >
                    <EmptyState
                      title="Kami tidak dapat menemukan yang kamu cari"
                      subTitle="Coba cari dengan keyword lain!"
                    />
                  </View>
                ) : (
                  <View style={styles.menu}>
                    <View>
                      <Text style={[styles.menuTitleBus, styles.menuTitleBusMetrodeli]}>BUS</Text>
                      <Text style={[styles.menuTitleMetrodeli, styles.menuTitleBusMetrodeli]}>METRODELI</Text>
                      <CtaButton
                        backgroundColor={COLORS.blue}
                        borderRadius={4}
                        vPadding={verticalScale(8)}
                        hPadding={horizontalScale(12)}
                        fFamily="Poppins-Bold"
                        fSize={moderateScale(12)}
                        fColor={COLORS.white}
                        text="Lihat jadwal"
                        action={() => navigation.navigate('TransportMetrodeliPage')}
                        style={{ marginTop: verticalScale(32) }}
                      />
                    </View>
                    <View>
                      <Image source={require('../../assets/img/bus.png')} />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default TransportPage
