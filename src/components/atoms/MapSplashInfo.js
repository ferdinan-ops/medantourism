import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'
import PhoneSwipe from '../../assets/gif/gif'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import React, { useState } from 'react'
import Modal from 'react-native-modal'

const MapSplashInfo = () => {
  const [modal, setModal] = useState(true)
  return (
    <Modal isVisible={modal}>
      <View style={Styles.container}>
        <View style={Styles.wrapper}>
          <PhoneSwipe />
          <Text style={Styles.text}>Swipe kanan dan kiri untuk menjelajahi map</Text>
          <TouchableOpacity style={Styles.button} onPress={() => setModal(false)}>
            <Text style={Styles.buttonText}>Oke</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: horizontalScale(292),
    height: verticalScale(430),
    alignItems: 'center',
    gap: verticalScale(24)
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(24),
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white
  },
  button: {
    paddingHorizontal: horizontalScale(89),
    paddingVertical: verticalScale(10),
    textAlign: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 10
  },
  buttonText: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Bold'
  }
})

export default MapSplashInfo
