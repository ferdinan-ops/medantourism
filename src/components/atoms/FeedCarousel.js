import { FlatList, View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import { getTimeSosial } from '../../utils/tranformData'
import COLORS from '../../theme/colors'

const Item = ({ username, date, tweet, isFirst, isLast, action, image }) => {
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        isFirst && { marginLeft: horizontalScale(24) },
        isLast && { marginRight: horizontalScale(24) }
      ]}
      onPress={action}
    >
      {image && <Image source={{ uri: image }} style={{ height: verticalScale(180), borderRadius: 6 }} />}
      <View style={Styles.metaData}>
        <Text style={Styles.username}>@{username}</Text>
        <Text style={Styles.date}>{date}</Text>
      </View>
      <Text style={Styles.tweet} numberOfLines={5}>
        {tweet}
      </Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(334),
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    gap: verticalScale(12),
    borderRadius: 12
  },
  metaData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Light',
    color: COLORS.black4
  },
  date: {
    fontSize: moderateScale(8),
    fontFamily: 'Poppins-Regular',
    color: COLORS.black4
  },
  tweet: {
    fontSize: moderateScale(14),
    color: COLORS.black4
  }
})

const FeedCarousel = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item
          isFirst={index === 0}
          isLast={index === data.length - 1}
          tweet={item.message}
          username={'dinaspariwisatakotamedan'}
          date={getTimeSosial(item.created_time)}
          action={() => Linking.openURL(item.permalink_url)}
          image={item.thumbnail_url ?? ''}
        />
      )}
    />
  )
}

export default FeedCarousel
