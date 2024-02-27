import { Button, Image, Text, TouchableOpacity, StyleSheet, View, StatusBar } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import React from 'react'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'

const PrimaryButton = ({ ...props }) => {
  return <Button title="Selanjutnya" style={Styles.btnPrimary} {...props} />
}

const SkipButton = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={{ color: COLORS.black1 }}>Nanti dulu deh</Text>
    </TouchableOpacity>
  )
}

const TitleText = ({ textAbove, textBelow }) => {
  return (
    <Text style={{ fontWeight: '700', fontSize: 32, textAlign: 'center', color: COLORS.black1 }}>
      {textAbove}
      {'\n'}
      {textBelow}
    </Text>
  )
}

const SubtitleText = ({ text }) => {
  return <Text style={{ fontSize: 16, textAlign: 'center', width: 383, color: COLORS.black3 }}>{text}</Text>
}

const PaginationDot = ({ selected }) => {
  const backgroundColor = selected ? COLORS.blue : '#D5D5D5'
  const size = selected ? { width: 12, height: 12 } : { width: 10, height: 10 }
  return (
    <View
      style={{
        width: size.width,
        height: size.height,
        marginHorizontal: horizontalScale(16),
        borderRadius: 10,
        backgroundColor
      }}
    />
  )
}

const OnBoardingPage2 = ({ navigation }) => (
  <>
    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
    <Onboarding
      onDone={() => navigation.navigate('AuthStackScreen')}
      onSkip={() => navigation.navigate('AuthStackScreen')}
      NextButtonComponent={PrimaryButton}
      SkipButtonComponent={SkipButton}
      DoneButtonComponent={PrimaryButton}
      DotComponent={PaginationDot}
      bottomBarColor={'#fff'}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/img/onBoardingImg1.png')} style={Styles.image} />,
          title: <TitleText textAbove="Cari tempat" textBelow="ternyamanmu!" />,
          subtitle: (
            <SubtitleText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." />
          )
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/img/onBoardingImg2.png')} style={Styles.image} />,
          title: <TitleText textAbove="Booking dengan" textBelow="mudah" />,
          subtitle: (
            <SubtitleText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." />
          )
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/img/onBoardingImg3.png')} style={Styles.image} />,
          title: <TitleText textAbove="Nikmati liburan" textBelow="anda" />,
          subtitle: (
            <SubtitleText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." />
          )
        }
      ]}
    />
  </>
)

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 309,
    height: 309,
    objectFit: 'contain'
  },
  btnPrimary: {
    backgroundColor: COLORS.blue,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(40),
    color: '#fff'
  }
})

export default OnBoardingPage2
