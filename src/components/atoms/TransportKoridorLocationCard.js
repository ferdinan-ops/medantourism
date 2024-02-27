import { View, Image, Text, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'

const KoridorLocationCard = ({ halteName, halteLocation }) => {
  const styles = StyleSheet.create({
    halteCard: {
      width: '100%',
      height: 97,
      backgroundColor: 'white',
      borderRadius: 20,
      elevation: 7,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginTop: 24
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    halteLocationWrapper: {
      marginLeft: 24
    },
    halteName: {
      fontSize: 16,
      fontWeight: '500',
      color: COLORS.black4
    },
    halteLocation: {
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      color: '#3b4949'
    }
  })

  return (
    <View style={styles.halteCard}>
      <View style={styles.wrapper}>
        <View>
          <Image source={require('../../assets/icons/map.png')} />
        </View>
        <View style={styles.halteLocationWrapper}>
          <Text style={[styles.halteName, { textTransform: 'capitalize' }]}>{halteName}</Text>
        </View>
      </View>
      <View style={styles.caretRightWrapper}>
        <Image source={require('../../assets/icons/caretRight.png')} />
      </View>
    </View>
  )
}

export default KoridorLocationCard
