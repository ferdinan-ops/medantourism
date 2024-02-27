import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'

import KategoriPencarian from '../../components/atoms/KategoriPencarian'
import Styles from '../../styles/SearchHistoryPageStyles'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { useEffect, useState } from 'react'
import { getHistorySearch, storeHistorySearch } from '../../services/search.service'
import { useGetPlacesQuery } from '../../api/place.api'
import Loading from '../../components/molecules/Loading'

const SearchHistoryPage = ({ navigation }) => {
  const [keyword, setKeyword] = useState('')
  const [history, setHistory] = useState([])

  const { data: populer, isSuccess } = useGetPlacesQuery('wisata populer')

  useEffect(() => {
    const getHistory = async () => {
      const history = await getHistorySearch()
      setHistory(history)
    }
    getHistory()
  }, [])

  const handleSubmit = async () => {
    if (keyword) {
      await storeHistorySearch(keyword)
      navigation.navigate('HomeNavStackScreen', {
        screen: 'SearchListsPage',
        params: { query: keyword }
      })
    }
  }

  const handleSearchByType = (type) => {
    navigation.navigate('HomeNavStackScreen', {
      screen: 'SearchListsPage',
      params: { query: type }
    })
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.inputGroup}>
        <Image source={ICONS.search} style={Styles.icon} />
        <TextInput
          placeholder="Cari hotel, flight, dan lainnya..."
          returnKeyType="search"
          placeholderTextColor={COLORS.black3}
          onChange={(e) => setKeyword(e.nativeEvent.text)}
          onSubmitEditing={handleSubmit}
          style={Styles.input}
          selectionColor={COLORS.blue}
        />
      </View>
      <View style={Styles.wrapper}>
        {history?.length > 0 && (
          <View style={Styles.riwayatPencarianContainer}>
            <Text style={Styles.sectionTitle}>Riwayat pencarian</Text>
            <View style={Styles.riwayatContainer}>
              {history.map((item, index) => (
                <TouchableOpacity style={Styles.riwayatText} key={index} onPress={() => handleSearchByType(item)}>
                  <Text style={Styles.riwayat}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        <View style={Styles.kategoriPencarianContainer}>
          <Text style={Styles.sectionTitle}>Kategori pencarian</Text>
          <KategoriPencarian />
        </View>
        <View style={Styles.populerContainer}>
          <Text style={Styles.sectionTitle}>✨ Populer</Text>
          {isSuccess ? (
            <View style={Styles.riwayatContainer}>
              {populer?.results?.slice(0, 5).map((item, index) => (
                <TouchableOpacity style={Styles.populerText} key={index} onPress={() => handleSearchByType(item.name)}>
                  <Text style={Styles.riwayat}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Loading size="small" color={COLORS.blue} />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchHistoryPage
