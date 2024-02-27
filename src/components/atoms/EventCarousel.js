import { FlatList, Image, TouchableOpacity } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import { useNavigation } from '@react-navigation/native'
import { storeLastSeen } from '../../services/lastSeen.service'

const Item = ({ image, isFirst, isLast, slug }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={async () => {
        await storeLastSeen({ id: slug, type: 'eventNews' })
        navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1', params: { slug } })
      }}
      style={[isFirst && { marginLeft: horizontalScale(24) }, isLast && { marginRight: horizontalScale(24) }]}
    >
      <Image
        source={{ uri: image }}
        style={{
          borderRadius: 12,
          width: horizontalScale(282),
          height: verticalScale(192),
          objectFit: 'cover'
        }}
      />
    </TouchableOpacity>
  )
}

const EventCarousel = ({ events }) => {
  return (
    <FlatList
      data={events}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item
          isFirst={index === 0}
          isLast={index === events.length - 1}
          slug={item.slug}
          image={item.attachment_url}
          // image={'https://source.unsplash.com/random'}
        />
      )}
    />
  )
}

export default EventCarousel
