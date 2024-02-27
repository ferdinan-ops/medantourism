import { View, Dimensions, Animated, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'
import { storeLastSeen } from '../../services/lastSeen.service'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = horizontalScale(225)
const ITEM_HEIGHT = verticalScale(320)

const BeritaDanEventCarouselCard = ({ image, slug, index, currentIndex }) => {
  const navigation = useNavigation()
  const scale = React.useRef(new Animated.Value(index === currentIndex ? 1 : 0.5)).current

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: index === currentIndex ? 1 : 0.5,
      duration: 200,
      useNativeDriver: false
    }).start()
  }, [index, currentIndex, scale])

  return (
    <TouchableOpacity
      style={{
        position: 'relative',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 12,
        paddingRight: horizontalScale(24),
        overflow: 'hidden'
      }}
      onPress={async () => {
        await storeLastSeen({ id: slug, type: 'eventNews' })
        navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1', params: { slug } })
      }}
    >
      <Animated.Image
        source={{ uri: image }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 12,
          transform: [{ scale }]
        }}
      />
    </TouchableOpacity>
  )
}

const CarouselCardItem = ({ item, index, currentIndex }) => {
  return (
    <BeritaDanEventCarouselCard
      image={item.attachment_url}
      slug={item.slug}
      index={index}
      currentIndex={currentIndex}
    />
  )
}

const ActiveDot = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.blue,
        width: 37,
        height: 5,
        marginRight: 4
      }}
    />
  )
}

const InactiveDot = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.black3,
        width: 8,
        height: 5,
        marginRight: 4
      }}
    />
  )
}

const CarouselBeritaDanEvent = ({ events }) => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={events}
        renderItem={({ item, index }) => <CarouselCardItem item={item} index={index} currentIndex={index} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        activeSlideAlignment="center"
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.5}
      />
      <Pagination
        dotsLength={events.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 8,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: COLORS.blue
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        dotElement={<ActiveDot />}
        inactiveDotElement={<InactiveDot />}
      />
    </View>
  )
}

export default CarouselBeritaDanEvent
