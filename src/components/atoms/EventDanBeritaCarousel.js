import { TouchableOpacity, StyleSheet, View, Image, Text, FlatList, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive'
import { eventDanBeritaData as DATA } from '../../utils/dataDummy'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { useGetNewsOrEventDetailQuery } from '../../api/news.api'
import { formatTimeAgo, removeHtmlTags } from '../../services/news.service'

export const Item = ({ slug, isFirst, isLast }) => {
  const navigation = useNavigation()
  const { data: detail, isLoading } = useGetNewsOrEventDetailQuery(slug)

  if (isLoading) {
    return null
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1', params: { slug } })}
      style={[
        Styles.container,
        isFirst && { marginLeft: horizontalScale(24) },
        isLast && { marginRight: horizontalScale(24) }
      ]}
    >
      <ImageBackground
        source={{ uri: detail.attachment_url }}
        style={Styles.thumbnail}
        imageStyle={{ borderRadius: 4 }}
      >
        <Image source={ICONS.saveCircle} style={Styles.saveButton} />
      </ImageBackground>
      <View style={Styles.metaData}>
        <Text style={Styles.title} numberOfLines={2}>
          {detail.title}
        </Text>
        <Text style={Styles.content} numberOfLines={2}>
          {removeHtmlTags(detail.description)}
        </Text>
        <Text style={Styles.time}>{formatTimeAgo(detail.created_at)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const EventDanBeritaCarousel = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item slug={item.id} isFirst={index === 0} isLast={index === (DATA.length || 0) - 1} />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
    />
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: horizontalScale(10),
    borderRadius: 8,
    backgroundColor: COLORS.white,
    width: horizontalScale(372)
  },
  thumbnail: {
    width: horizontalScale(131),
    height: verticalScale(98),
    objectFit: 'cover'
  },
  saveButton: {
    position: 'absolute',
    top: 6,
    right: 8
  },
  metaData: {
    gap: horizontalScale(8),
    width: '60%'
  },
  title: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Bold'
  },
  content: {
    color: COLORS.black3,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Medium'
  },
  time: {
    color: COLORS.secondary,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Medium'
  }
})

export default EventDanBeritaCarousel
