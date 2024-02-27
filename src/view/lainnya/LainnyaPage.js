import { ScrollView, SafeAreaView, StatusBar } from 'react-native'

import { AccordionWisataLainnya, AccordionKuliner, AccordionHeritage } from '../../components/atoms/Accordion'
import Styles from '../../styles/LainnyaPageStyles'

const LainnyaPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        <AccordionWisataLainnya
          title="Wisata Lainnya"
          action={() => navigation.navigate('HomeNavStackScreen', { screen: 'MapRekreasi' })}
        />
        <AccordionKuliner
          title="Kuliner"
          action={() => navigation.navigate('HomeNavStackScreen', { screen: 'MapKuliner' })}
        />
        <AccordionHeritage
          title="Heritage"
          action={() => navigation.navigate('HomeNavStackScreen', { screen: 'MapHeritage' })}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default LainnyaPage
