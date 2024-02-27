import { View, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const DATA_WISATA_LAINNYA = [
  { icon: ICONS.belanjaIcon, label: 'Wisata Belanja' },
  { icon: ICONS.wisataIcon, label: 'Wisata Buatan' },
  { icon: ICONS.hiburanIcon, label: 'Wisata Hiburan' },
  { icon: ICONS.edukasiIcon, label: 'Wisata Edukasi' }
]

export const AccordionWisataLainnya = (props) => {
  const [expanded, setExpanded] = useState(false)
  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  const animatedHeight = new Animated.Value(expanded ? verticalScale(120) : 0)
  const navigation = useNavigation()

  const navigateToDetails = (keyword) => {
    navigation.navigate('LainnyaDetailPage', { keyword, type: 'travel', title: keyword })
  }

  return (
    <View style={stylesWisataLainnya.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={stylesWisataLainnya.accordionHeader}>
          <View style={stylesWisataLainnya.accordionTitle}>
            <Text style={stylesWisataLainnya.accordionHeaderText}>{props.title}</Text>
            <CtaButton
              backgroundColor={COLORS.blue}
              borderRadius={50}
              vPadding={verticalScale(4)}
              hPadding={horizontalScale(12)}
              fFamily="Poppins-Bold"
              fColor={COLORS.white}
              text="Lihat map"
              action={props.action}
            />
          </View>
          <Image source={ICONS.downArrow} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        <View style={stylesWisataLainnya.buttonContainer}>
          {DATA_WISATA_LAINNYA.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={stylesWisataLainnya.buttonLabel}
              onPress={() => navigateToDetails(item.label)}
            >
              <Image source={item.icon} style={stylesWisataLainnya.icon} />
              <Text style={stylesWisataLainnya.label}>{item.label.replace(' ', '\n')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  )
}

const stylesWisataLainnya = StyleSheet.create({
  accordionContainer: {
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    overflow: 'hidden',
    gap: verticalScale(16)
  },
  accordionHeader: {
    paddingRight: horizontalScale(26),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white
  },
  accordionHeaderText: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black4
  },
  accordionContentText: {
    padding: 10,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: horizontalScale(40),
    rowGap: verticalScale(40),
    justifyContent: 'space-between'
  },
  icon: {
    width: horizontalScale(60),
    height: verticalScale(60),
    objectFit: 'contain'
  },
  buttonLabel: {
    alignItems: 'center',
    gap: verticalScale(8)
  },
  label: {
    fontSize: moderateScale(12),
    color: COLORS.black4,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold'
  },
  headerBadge: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white,
    backgroundColor: COLORS.blue,
    borderRadius: 50,
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(12)
  },
  accordionTitle: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center'
  }
})

const DATA_KULINER = [
  { icon: ICONS.khasMedan, label: 'Khas Medan' },
  { icon: ICONS.khasAceh, label: 'Khas Aceh' },
  { icon: ICONS.khasPadang, label: 'Khas Padang' },
  { icon: ICONS.khasJambi, label: 'Khas Jambi' },
  { icon: ICONS.khasPalembang, label: 'Khas Palembang' }
]

export const AccordionKuliner = (props) => {
  const [expanded, setExpanded] = useState(false)
  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  const animatedHeight = new Animated.Value(expanded ? verticalScale(268) : 0)
  const navigation = useNavigation()

  const navigateToDetails = (keyword) => {
    navigation.navigate('LainnyaDetailPage', { keyword, type: 'kuliner', title: keyword })
  }

  return (
    <View style={stylesWisataLainnya.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={stylesWisataLainnya.accordionHeader}>
          <View style={stylesWisataLainnya.accordionTitle}>
            <Text style={stylesWisataLainnya.accordionHeaderText}>{props.title}</Text>
            <CtaButton
              backgroundColor={COLORS.blue}
              borderRadius={50}
              vPadding={verticalScale(4)}
              hPadding={horizontalScale(12)}
              fFamily="Poppins-Bold"
              fColor={COLORS.white}
              text="Lihat map"
              action={props.action}
            />
          </View>
          <Image source={ICONS.downArrow} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        <View style={stylesWisataLainnya.buttonContainer}>
          {DATA_KULINER.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={stylesWisataLainnya.buttonLabel}
              onPress={() => navigateToDetails(item.label)}
            >
              <Image source={item.icon} style={stylesWisataLainnya.icon} />
              <Text style={stylesWisataLainnya.label}>{item.label.replace(' ', '\n')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  )
}

const DATA_HERITAGE = [
  { icon: ICONS.tjongAFie, label: 'Tjong A Fie' },
  { icon: ICONS.maimun, label: 'Istana Maimun' },
  { icon: ICONS.masjidRaya, label: 'Masjid Raya' },
  { icon: ICONS.gedungLondon, label: 'Gedung London' }
]

export const AccordionHeritage = (props) => {
  const [expanded, setExpanded] = useState(false)
  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  const animatedHeight = new Animated.Value(expanded ? verticalScale(130) : 0)
  const navigation = useNavigation()

  const navigateToDetails = (keyword) => {
    navigation.navigate('LainnyaDetailPage', { keyword, type: 'heritage', title: keyword })
  }

  return (
    <View style={stylesWisataLainnya.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={stylesWisataLainnya.accordionHeader}>
          <View style={stylesWisataLainnya.accordionTitle}>
            <Text style={stylesWisataLainnya.accordionHeaderText}>{props.title}</Text>
            <CtaButton
              backgroundColor={COLORS.blue}
              borderRadius={50}
              vPadding={verticalScale(4)}
              hPadding={horizontalScale(12)}
              fFamily="Poppins-Bold"
              fColor={COLORS.white}
              text="Lihat map"
              action={props.action}
            />
          </View>
          <Image source={ICONS.downArrow} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        <View style={stylesWisataLainnya.buttonContainer}>
          {DATA_HERITAGE.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={stylesWisataLainnya.buttonLabel}
              onPress={() => navigateToDetails(item.label)}
            >
              <Image source={item.icon} style={stylesWisataLainnya.icon} />
              <Text style={stylesWisataLainnya.label}>{item.label.replace(' ', '\n')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  )
}
