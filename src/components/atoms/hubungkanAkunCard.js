import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'

const AturAkunCard = ({
  action,
  SocialMediaWidth,
  SocialMediaHeight,
  SocialMediaLogo,
  CardTitle,
  CardDescription,
  AddIcon,
  MinusIcon,
  ConnectedAcc
}) => {
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
    addWrapper: {
      marginTop: 20
    }
  })

  return (
    <TouchableOpacity onPress={action} style={styles.card}>
      <View style={styles.connectIconWrapper}>
        <Image style={{ width: SocialMediaWidth, height: SocialMediaHeight }} source={SocialMediaLogo} />
      </View>
      <View>
        <Text style={styles.cardTitle}>{CardTitle}</Text>
        {ConnectedAcc ? (
          <Text style={styles.cardDescription}>{ConnectedAcc}</Text>
        ) : (
          <Text style={styles.cardDescription}>{CardDescription}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.addWrapper} onPress={action}>
        {ConnectedAcc ? <Image source={MinusIcon} /> : <Image source={AddIcon} />}
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default AturAkunCard
