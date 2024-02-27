import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import StarDisplay from './StarDisplay'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import { useSelector } from 'react-redux'
import { getImagePlace } from '../../utils/tranformData'
import { getDistanceInfo } from '../../services/location'

const Item = ({ isFirst, isLast, id, type }) => {
  const gap = verticalScale(24)
  const { data, isLoading } = useGetPlaceDetailQuery(id)
  const navigation = useNavigation()
  const location = useSelector((state) => state.location.location)

  if (isLoading) return null

  return (
    <View style={[Styles.container, isFirst && { marginLeft: gap }, isLast && { marginRight: gap }]}>
      <ImageBackground
        source={{ uri: getImagePlace(data?.result?.photos[1].photo_reference) }}
        style={Styles.thumbnail}
        imageStyle={Styles.imgBackground}
      >
        <TouchableOpacity>
          <Image source={ICONS.saveCircle} style={Styles.saveButton} />
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity
        style={Styles.metaData}
        onPress={() => navigation.navigate('DetailAdiMulia', { placeId: id, type })}
      >
        <Text style={Styles.distance}>
          {getDistanceInfo(location?.address?.location, data?.result?.geometry?.location)}
        </Text>
        <Text style={Styles.name}>{data?.result?.name}</Text>
        <StarDisplay rating={Math.round(data?.result?.rating)} />
      </TouchableOpacity>
    </View>
  )
}

const TempatWisataDetailCarousel = ({ data }) => {
  return (
    <FlatList
      data={data.slice(0, 4)}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item id={item.id} isFirst={index === 0} isLast={index === data.length - 1} type={item.type} />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: verticalScale(24) }}
    />
  )
}

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(298),
    borderRadius: 8
  },
  thumbnail: {
    width: horizontalScale(298),
    height: verticalScale(173),
    objectFit: 'cover'
  },
  saveButton: {
    position: 'absolute',
    top: 6,
    right: 8
  },
  metaData: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
    width: horizontalScale(298),
    alignItems: 'flex-start',
    gap: verticalScale(4)
  },
  distance: {
    color: COLORS.secondary,
    fontSize: moderateScale(18),
    fontFamily: 'Poppins-Regular'
  },
  name: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium'
  },
  imgBackground: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
})

export default TempatWisataDetailCarousel
