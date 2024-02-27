import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'

const AturAkunCard = ({ action, iconWidth, iconHeight, LeftIcon, CardTitle, CardDescription, RightIcon }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.card}>
      <View style={styles.connectIconWrapper}>
        <Image style={{ width: iconWidth, height: iconHeight }} source={LeftIcon} />
      </View>
      <View>
        <Text style={styles.cardTitle}>{CardTitle}</Text>
        <Text style={styles.cardDescription}>{CardDescription}</Text>
      </View>
      <View style={styles.caretWrapper}>
        <Image source={RightIcon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  card: {
    width: '100%',
    height: 74,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black4
  },
  connectIconWrapper: {
    marginTop: 5
  },
  cardDescription: {
    width: 245,
    marginTop: 8,
    color: COLORS.black4
  },
  caretWrapper: {
    marginTop: 20
  }
})

export default AturAkunCard
