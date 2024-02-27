import React from 'react'
import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { verticalScale, horizontalScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'
import { getImagePlace } from '../../utils/tranformData'
import { useNavigation } from '@react-navigation/native'
import { storeLastSeen } from '../../services/lastSeen.service'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = horizontalScale(298)
const ITEM_HEIGHT = verticalScale(173)

const MicePopulerCard = ({ image, name, placeId, type }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={{
        position: 'relative',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 12,
        paddingLeft: horizontalScale(25)
      }}
      onPress={async () => {
        await storeLastSeen({ id: placeId, type })
        navigation.navigate('DetailAdiMulia', { placeId, type })
      }}
    >
      <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 12 }} />
      <ImageBackground
        source={require('../../assets/img/backgroundBlur.png')}
        style={{
          borderRadius: 4,
          paddingVertical: 6,
          paddingHorizontal: 12,
          alignItems: 'center',
          gap: 12,
          position: 'absolute',
          bottom: 20,
          left: 24,
          flexDirection: 'row'
        }}
      >
        <Image source={ICONS.locationPin} />
        <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: 500 }}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export const CarouselCardItem = ({ item, index }) => {
  return (
    <MicePopulerCard
      image={getImagePlace(item.photos[0].photo_reference)}
      name={item.name}
      placeId={item.place_id}
      type={item.type}
    />
  )
}

const ActiveDot = () => {
  return <View style={{ backgroundColor: COLORS.blue, width: 37, height: 5, marginRight: 4 }}></View>
}

const InactiveDot = () => {
  return <View style={{ backgroundColor: COLORS.black3, width: 8, height: 5, marginRight: 4 }}></View>
}

const MicePopulerCarousel = ({ data }) => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        activeSlideAlignment="start"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
      <Pagination
        dotsLength={data.length}
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

export default MicePopulerCarousel
