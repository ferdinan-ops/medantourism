import { View, SafeAreaView, StatusBar } from 'react-native'

import { styles } from '../../styles/NotifikasiPage.styles'
import { horizontalScale } from '../../theme/responsive'
import EmptyState from '../../components/molecules/EmptyState'

const NotifikasiPage = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={[styles.container, { paddingHorizontal: horizontalScale(24) }]}>
        <EmptyState title="Anda tidak memiliki notifikasi" subTitle="Ayo eksplorasi Medan Tourism lebih banyak lagi!" />
      </View>
    </SafeAreaView>
  )
}

export default NotifikasiPage
