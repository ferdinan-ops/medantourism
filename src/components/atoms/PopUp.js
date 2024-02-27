import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive'
import Modal from 'react-native-modal'
import React from 'react'

const PopUp = ({ title, description, action }) => {
  // const [isModalVisible, setModalVisible] = useState(false)

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible)
  // }

  return (
    <Modal style={Styles.container}>
      <View style={Styles.contentContainer}>
        <Image source={ICONS.moreInformation} style={Styles.icon} />
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={Styles.button} onPress={action}>
        <Text style={Styles.buttonText}></Text>
      </TouchableOpacity>
    </Modal>
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(32),
    paddingHorizontal: horizontalScale(24),
    borderRadius: 25,
    backgroundColor: COLORS.white
  },
  contentContainer: {
    alignItems: 'center',
    gap: verticalScale(24)
  },
  icon: {
    width: horizontalScale(63),
    height: horizontalScale(63)
  },
  title: {
    color: COLORS.black4,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold'
  },
  description: {
    colors: COLORS.black4,
    fontFamily: 'Poppins-Regular'
  },
  button: {
    paddingHorizontal: horizontalScale(82),
    paddingVertical: verticalScale(12),
    backgroundColor: COLORS.blue,
    borderRadius: 12
  },
  buttonText: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Bold'
  }
})

export default PopUp
