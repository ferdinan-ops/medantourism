import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'
import { useState } from 'react'

const InputGroup = ({ label, placeholder, placeholderTextColor, type, value, setValue, keyboardType }) => {
  const isPassword = type === 'password'
  const [isShow, setIsShow] = useState(false)

  return (
    <View style={Styles.inputGroup}>
      <Text style={Styles.inputLabel}>{label}</Text>
      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder={placeholder}
          style={[Styles.input, isPassword && { paddingRight: horizontalScale(50) }]}
          autoCapitalize={isPassword ? 'none' : 'sentences'}
          value={value}
          onChangeText={setValue}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPassword && !isShow}
          keyboardType={keyboardType || 'default'}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsShow(!isShow)} style={Styles.eye} activeOpacity={0.7}>
            <Image source={isShow ? require('../../assets/img/eye.png') : require('../../assets/img/eyeSlash.png')} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  inputGroup: {
    display: 'flex',
    gap: verticalScale(11),
    position: 'relative'
  },
  inputLabel: {
    fontSize: moderateScale(14),
    color: COLORS.black3,
    marginLeft: horizontalScale(20)
  },
  input: {
    backgroundColor: COLORS.gray5,
    paddingVertical: verticalScale(12),
    paddingLeft: horizontalScale(24),
    borderRadius: 20,
    color: COLORS.black1,
    fontSize: moderateScale(14)
  },
  eye: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: horizontalScale(24),
    justifyContent: 'center'
  }
})

export default InputGroup
