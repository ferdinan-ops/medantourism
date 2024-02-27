import { View, SafeAreaView, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'
import { useState } from 'react'

import TransportKoridorInputGroup from '../../components/atoms/TransportKoridorInputGroup.js'
import KoridorLocationCard from '../../components/atoms/TransportKoridorLocationCard'
import useGetDetailKoridor from '../../hooks/useGetDetailKoridor.js'
import { transportMetrodeliData } from '../../utils/dataDummy.js'
import EmptyState from '../../components/molecules/EmptyState.js'
import { styles } from '../../styles/TransportKoridor.style'
import Loading from '../../components/molecules/Loading.js'
import COLORS from '../../theme/colors.js'

const TransportMetrodeliPage = ({ navigation, route }) => {
  const { koridorId, index } = route.params
  const [searchText, setSearchText] = useState('')
  const { state: haltes, setState: setHaltes, initialState, isSuccess } = useGetDetailKoridor(koridorId)

  const handleSearch = (text) => {
    setSearchText(text)
    const filtered = haltes.filter((halte) => halte.name.toLowerCase().includes(text.toLowerCase()))
    if (text === '') return setHaltes(initialState)
    setHaltes(filtered)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.content}>
              <TransportKoridorInputGroup
                index={index}
                HeroImage={transportMetrodeliData[index].halteImage}
                Placeholder="Cari halte"
                Value={searchText}
                handleChange={(e) => handleSearch(e.nativeEvent.text)}
              />
              <View style={styles.menuWrapper}>
                {isSuccess ? (
                  searchText && haltes.length === 0 ? (
                    <EmptyState
                      title="Kami tidak dapat menemukan yang kamu cari"
                      subTitle="Coba cari dengan keyword lain!"
                    />
                  ) : (
                    haltes.map((item, index) => <KoridorLocationCard halteName={item.name} key={index} />)
                  )
                ) : (
                  <Loading size="large" backgroundColor={COLORS.white} />
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default TransportMetrodeliPage
