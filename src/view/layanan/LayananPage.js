import { View, SafeAreaView, StatusBar, Linking } from 'react-native'

import LayananMenu from '../../components/atoms/LayananMenu'
import Styles from '../../styles/LayananPageStyles'
import ICONS from '../../assets/icons/icons'

const LayananPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={Styles.wrapper}>
        <LayananMenu icon={ICONS.pmi} label="PMI" action={() => Linking.openURL('tel:081262156159')} />
        <LayananMenu icon={ICONS.polisi} label="Polisi" action={() => Linking.openURL('tel:061-7879363')} />
        <LayananMenu
          icon={ICONS.poskoBencanaAlam}
          label="Posko Bencana Alam"
          action={() => Linking.openURL('tel:021-8750772')}
        />
        <LayananMenu
          icon={ICONS.sar}
          label="SAR (Search And Rescue)"
          action={() => Linking.openURL('tel:62 61 455 3111')}
        />
        <LayananMenu icon={ICONS.pln} label="PLN" action={() => Linking.openURL('tel:+62 61 7869025')} />
        <LayananMenu
          icon={ICONS.pemadamKebakaran}
          label="Pemadam Kebakaran"
          action={() => Linking.openURL('tel:061-4515356')}
        />
        <LayananMenu icon={ICONS.ambulans} label="Ambulans" action={() => Linking.openURL('tel:118')} />
      </View>
    </SafeAreaView>
  )
}

export default LayananPage
