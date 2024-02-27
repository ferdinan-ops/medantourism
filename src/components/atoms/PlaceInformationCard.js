import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { Fragment } from 'react'

import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import { getTimePlace } from '../../utils/tranformData'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Period = ({ children, title }) => {
  return (
    <Fragment>
      <View style={Styles.sectionTitle}>
        <Image source={ICONS.clockBlue} />
        <Text style={Styles.title}>{title}</Text>
      </View>
      <Text style={Styles.sectionInfo} numberOfLines={1}>
        {children}
      </Text>
    </Fragment>
  )
}

const PlaceInforamationCard = ({ image, name, rating, raters, closeAction, detailAction, placeId, ruteAction }) => {
  const navigation = useNavigation()
  const { data, isSuccess } = useGetPlaceDetailQuery(placeId)
  const location = useSelector((state) => state.location.location)

  let content
  if (isSuccess) {
    if (data.result.current_opening_hours) {
      content = (
        <Period title="Buka Pada">
          {getTimePlace(data.result.current_opening_hours.periods[0].open.time)} -{' '}
          {getTimePlace(data.result.current_opening_hours.periods[0].close.time)} WIB
        </Period>
      )
    } else {
      content = (
        <Period title={data.result.international_phone_number ? 'No. Telepon' : 'Alamat'}>
          {data.result.international_phone_number || data.result.vicinity}
        </Period>
      )
    }
  }

  return (
    <View style={Styles.container}>
      <ImageBackground
        source={{ uri: image }}
        style={Styles.image}
        imageStyle={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <TouchableOpacity onPress={closeAction}>
          <Image source={ICONS.xButton} style={Styles.xButton} />
        </TouchableOpacity>
        <Text style={Styles.name}>{name}</Text>
      </ImageBackground>
      <View style={Styles.contentContainer}>
        <View style={Styles.metaDataContainer}>
          <View style={Styles.sectionContainer}>{content}</View>
          <View style={Styles.border} />
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitle}>
              <Image source={ICONS.star} />
              <Text style={Styles.title}>Rating</Text>
            </View>
            <Text style={Styles.sectionInfo}>
              {rating} ({raters} Reviews)
            </Text>
          </View>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.ruteButton}
            onPress={() =>
              navigation.navigate('Rute', {
                origin: {
                  latitude: parseFloat(location?.address?.location?.lat),
                  longitude: parseFloat(location?.address?.location?.lng)
                },
                destination: {
                  latitude: parseFloat(data?.result?.geometry?.location?.lat),
                  longitude: parseFloat(data?.result?.geometry?.location?.lng)
                }
              })
            }
          >
            <View style={Styles.ruteButtonWrapper}>
              <Image source={ICONS.routeBlue} />
              <Text style={Styles.ruteText}>Rute</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailButton} onPress={detailAction}>
            <Text style={Styles.detailText}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const CARD_WIDTH = Dimensions.get('screen').width
const IMAGE_HEIGHT = verticalScale(248)

const Styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0
  },
  image: {
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    paddingBottom: verticalScale(19)
  },
  xButton: {
    position: 'absolute',
    top: verticalScale(13),
    right: horizontalScale(24),
    width: horizontalScale(50),
    height: verticalScale(50),
    objectFit: 'contain'
  },
  name: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: moderateScale(30),
    fontFamily: 'Poppins-SemiBold',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  contentContainer: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    gap: verticalScale(29),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(35)
  },
  metaDataContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    alignItems: 'center',
    maxWidth: '100%'
  },
  sectionContainer: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    maxWidth: 200,
    backgroundColor: COLORS.white
  },
  sectionTitle: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center'
  },
  title: {
    color: COLORS.black4,
    fontSize: moderateScale(12)
  },
  sectionInfo: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Medium'
  },
  border: {
    width: horizontalScale(2),
    height: verticalScale(36),
    backgroundColor: '#D9D9D9',
    borderRadius: 50
  },
  buttonContainer: {
    elevation: 5,
    backgroundColor: COLORS.white,
    borderColor: '#d9d9d9',
    borderRadius: 16,
    // paddingHorizontal: horizontalScale(8),
    // paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: horizontalScale(32)
  },
  ruteButton: {},
  ruteButtonWrapper: {
    flexDirection: 'row',
    paddingHorizontal: verticalScale(8),
    paddingVertical: verticalScale(14),
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: horizontalScale(12)
  },
  ruteText: {
    color: COLORS.blue,
    fontFamily: 'Poppins-Medium'
  },
  detailButton: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(12),
    backgroundColor: COLORS.blue,
    borderRadius: 8
  },
  detailText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium'
  }
})

export default PlaceInforamationCard
