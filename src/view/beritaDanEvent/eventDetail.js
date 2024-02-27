import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions
} from 'react-native'
import RenderHtml from 'react-native-render-html'

import { useGetNewsOrEventDetailQuery } from '../../api/news.api'
import { storeBookmarks } from '../../services/bookmark.service'
import { formatTimeAgo } from '../../services/news.service'

import { styles } from '../../styles/eventDetail.Style'
import Loading from '../../components/molecules/Loading'
import COLORS from '../../theme/colors'
import useCheckBookmark from '../../hooks/useCheckBookmark'

const BeritaDanEventPageMedanTourismEvent = ({ navigation, route }) => {
  const { slug } = route.params

  const { width } = useWindowDimensions()
  const { isBookmarks, setIsBookmarks } = useCheckBookmark({ id: slug, type: 'eventNews' })
  const { data: detail, isLoading } = useGetNewsOrEventDetailQuery(slug)

  if (isLoading) {
    return <Loading size={70} color={COLORS.blue} backgroundColor={COLORS.white} isAbsolute />
  }

  const handleBookmark = async () => {
    await storeBookmarks({ id: slug, type: 'eventNews' })
    setIsBookmarks(!isBookmarks)
  }

  console.log({ isBookmarks })

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: detail.attachment_url }}
            style={{ width: '100%', height: 450, position: 'relative' }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                top: 0,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}
            />
            <View style={[styles.header, { paddingTop: 53 }]}>
              <View style={styles.action}>
                <View style={styles.backWrapper}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerIcon}>
                    <Image
                      style={{ width: 24, objectFit: 'contain' }}
                      source={require('../../assets/icons/backButtonBlack.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.saveAndShareWrapper}>
                  <TouchableOpacity onPress={handleBookmark} activeOpacity={0.7} style={styles.containerIcon}>
                    <Image
                      style={{ width: 22, objectFit: 'contain' }}
                      source={
                        isBookmarks
                          ? require('../../assets/icons/saveButtonFill.png')
                          : require('../../assets/icons/saveButton.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.title}>{detail.title}</Text>
                <View style={styles.time}>
                  <Text style={styles.sameColor}>MedanTourism</Text>
                  <Image style={styles.dot} source={require('../../assets/icons/dot.png')} />
                  <Text style={styles.sameColor}>{formatTimeAgo(detail.created_at)}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={[styles.box, { marginTop: -50 }]}>
            <RenderHtml
              contentWidth={width}
              source={{ html: detail.description }}
              tagsStyles={{
                p: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  lineHeight: 20
                },
                h1: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                  lineHeight: 25
                },
                h2: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 16,
                  lineHeight: 22
                },
                h3: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  lineHeight: 20
                },
                h4: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                  lineHeight: 18
                },
                h5: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 10,
                  lineHeight: 15
                },
                h6: {
                  color: COLORS.black3,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 8,
                  lineHeight: 12
                },
                a: {
                  color: COLORS.blue,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  lineHeight: 20
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BeritaDanEventPageMedanTourismEvent
