import { StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'

const MapHeader = ({ placeholder, submit, handleChange, value }) => {
  const navigation = useNavigation()
  return (
    <View style={Styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={ICONS.backButtonBlack} style={{ width: horizontalScale(24), objectFit: 'contain' }} />
        <View
          style={{
            backgroundColor: COLORS.white,
            width: horizontalScale(50),
            height: verticalScale(50),
            objectFit: 'contain',
            borderRadius: 100,
            position: 'absolute',
            zIndex: -1
          }}
        />
      </TouchableOpacity>
      <View style={Styles.inputContainer}>
        <Image
          source={ICONS.search}
          style={{
            width: horizontalScale(20),
            height: verticalScale(20),
            objectFit: 'contain'
          }}
        />
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.black3}
          selectionColor={COLORS.blue}
          style={Styles.inputField}
          returnKeyType="search"
          onChange={handleChange}
          onSubmitEditing={submit}
        />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: horizontalScale(24),
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: horizontalScale(34),
    position: 'absolute',
    top: verticalScale(79),
    zIndex: 1
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    paddingLeft: horizontalScale(12),
    width: horizontalScale(274),
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
    borderRadius: 24
  },
  inputField: {
    width: '90%',
    color: COLORS.black1,
    fontSize: moderateScale(12),
    fontFamily: 'Poppins-Regular'
  }
})

export default MapHeader
