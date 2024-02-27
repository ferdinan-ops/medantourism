import {
  StatusBar,
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native'
import CtaButton from './CtaButton'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import { getImagePlace } from '../../utils/tranformData'

const { width } = Dimensions.get('window')

const MapDetail = ({
  image,
  name,
  address,
  phone,
  description,
  leftTitle,
  leftText,
  destination,
  phoneTitle,
  photos
}) => {
  const navigation = useNavigation()
  const location = useSelector((state) => state.location.location)

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollViewRef = useRef()
  const scrollX = new Animated.Value(0)

  const renderImage = () => {
    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
      >
        <Image
          style={StylesCarousel.carouselContainer}
          source={{ uri: getImagePlace(photos[currentIndex].photo_reference) }}
        />
      </Animated.ScrollView>
    )
  }

  const renderButton = () => {
    const handleNextPress = () => {
      const nextIndex = (currentIndex + 1) % photos.length

      setCurrentIndex(nextIndex)
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true })
    }

    const handlePrevPress = () => {
      const prevIndex = (currentIndex - 1) % photos.length

      setCurrentIndex(prevIndex)
      scrollViewRef.current.scrollTo({ x: prevIndex * width, animated: true })
    }

    return (
      <View style={StylesCarousel.arrowContainer}>
        <TouchableOpacity style={StylesCarousel.arrow} onPress={handlePrevPress} disabled={currentIndex === 0}>
          <Image source={ICONS.leftArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          style={StylesCarousel.arrow}
          onPress={handleNextPress}
          disabled={currentIndex === photos.length - 1}
        >
          <Image source={ICONS.rightArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* <Image source={{ uri: image }} style={Styles.image} /> */}
        <View style={[StylesCarousel.carouselRootContainer, { position: 'relative' }]}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>{renderImage()}</View>
          <View style={StylesCarousel.arrowRootContainer}>{renderButton()}</View>
        </View>
        <View style={Styles.contentContainer}>
          <View style={Styles.nameAndAddress}>
            <Text style={Styles.name}>{name}</Text>
            <View style={[Styles.addressContainer, { maxWidth: '100%' }]}>
              <Image source={ICONS.locationPinBlue} style={Styles.icon} />
              <Text style={[Styles.address, { maxWidth: width - horizontalScale(48) }]} numberOfLines={1}>
                {address}
              </Text>
            </View>
          </View>
          <View style={Styles.entryInformation}>
            <View style={Styles.entrySection}>
              <View style={Styles.entryHeader}>
                <Image style={Styles.icon} source={ICONS.clockBlue} />
                <Text style={Styles.entryTitle}>{leftTitle}</Text>
              </View>
              <Text style={[Styles.entryContent, { maxWidth: width / 2 - horizontalScale(48) }]} numberOfLines={1}>
                {leftText}
              </Text>
            </View>
            <View
              style={{
                width: horizontalScale(2),
                height: verticalScale(36),
                backgroundColor: '#D9D9D9',
                borderRadius: 50
              }}
            />
            <View style={Styles.entrySection}>
              <View style={Styles.entryHeader}>
                <Image
                  style={{ height: verticalScale(15), width: verticalScale(15), resizeMode: 'contain' }}
                  source={
                    phoneTitle === 'No. Telepon'
                      ? require('../../assets/icons/phone.png')
                      : require('../../assets/icons/map-fill.png')
                  }
                />
                <Text style={Styles.entryTitle}>{phoneTitle}</Text>
              </View>
              <Text style={[Styles.entryContent, { maxWidth: width / 2 - horizontalScale(48) }]} numberOfLines={1}>
                {/* IDR {minPrice} - IDR {maxPrice} */}
                {phone}
              </Text>
            </View>
          </View>
          <Text style={Styles.description}>{description}</Text>
        </View>
      </ScrollView>
      <View style={Styles.ruteButtonContainer}>
        <CtaButton
          icon={ICONS.routeWhite}
          text="Rute"
          fColor={COLORS.white}
          fFamily="Poppins-Medium"
          backgroundColor={COLORS.blue}
          hPadding={horizontalScale(14)}
          vPadding={verticalScale(8)}
          borderRadius={8}
          style={{ flexDirection: 'row', gap: horizontalScale(12) }}
          action={() =>
            navigation.navigate('Rute', {
              origin: {
                latitude: parseFloat(location?.address?.location?.lat),
                longitude: parseFloat(location?.address?.location?.lng)
              },
              destination: {
                latitude: parseFloat(destination?.lat),
                longitude: parseFloat(destination?.lng)
              }
            })
          }
        />
      </View>
    </SafeAreaView>
  )
}

const StylesCarousel = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.gray5
  },
  carouselContainer: {
    width,
    height: verticalScale(456)
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20
  },
  carouselRootContainer: {
    width,
    height: verticalScale(456),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center'
  },
  arrowRootContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: verticalScale(216)
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingHorizontal: horizontalScale(24)
  },
  dot: {
    backgroundColor: COLORS.blue,
    borderRadius: 100
  },
  dotContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16)
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: verticalScale(50)
  },
  contentContainer: {
    paddingVertical: verticalScale(48),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.gray5,
    flex: 1
  },
  sectionButtonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(32),
    alignItems: 'flex-start'
  },
  sectionButtonTextActive: {
    color: COLORS.black3,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold'
  },
  sectionButtonTextInactive: {
    color: COLORS.black3,
    opacity: 0.5,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold'
  },
  contentWrapper: {
    gap: verticalScale(29),
    paddingBottom: 60
  },
  actionMenuRootContainer: {
    position: 'absolute',
    // bottom: '10%',
    bottom: horizontalScale(24)
  }
})

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray5,
    flex: 1,
    alignItems: 'center'
  },
  scrollContainer: {
    flex: 1
  },
  image: {
    width,
    height: verticalScale(379),
    objectFit: 'cover'
  },
  contentContainer: {
    paddingVertical: verticalScale(32),
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(32)
  },
  nameAndAddress: {
    gap: verticalScale(12)
  },
  name: {
    color: COLORS.black4,
    fontSize: moderateScale(30),
    fontFamily: 'Poppins-SemiBold'
  },
  addressContainer: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center'
  },
  icon: {
    height: verticalScale(15),
    objectFit: 'contain'
  },
  address: {
    color: COLORS.secondary
  },
  entryInformation: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  entrySection: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    gap: verticalScale(10)
  },
  entryHeader: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center'
  },
  entryTitle: {
    color: COLORS.black4,
    fontSize: moderateScale(12)
  },
  entryContent: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Medium'
  },
  description: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium',
    paddingBottom: verticalScale(32) + 49
  },
  ruteButtonContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(20),
    borderRadius: 16,
    position: 'absolute',
    bottom: verticalScale(24),
    elevation: 5
  }
})

export default MapDetail
