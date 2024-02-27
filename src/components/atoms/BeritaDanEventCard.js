import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

const BeritaDanEventCard = ({ CardContent, CardImage, CardTitle, CardDescription, CardDate, onPress, cardUri }) => {
  let height
  // eslint-disable-next-line no-lone-blocks
  {
    CardContent === 'news' ? (height = 98) : (height = 120)
  }

  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 24
    },
    cardImg: {
      width: 131,
      height,
      borderRadius: 4
    },
    cardData: {
      width: 230,
      height,
      marginLeft: 10,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
      color: '#252525'
    },
    cardDescription: {
      fontSize: 10,
      fontWeight: '500',
      fontFamily: 'Poppins-Medium',
      color: '#3b4949'
    },
    cardDate: {
      fontSize: 10,
      fontWeight: '500',
      fontFamily: 'Poppins-Medium',
      color: '#828282'
    }
  })

  return (
    <TouchableOpacity style={[styles.card]} onPress={onPress}>
      {cardUri ? (
        <Image style={styles.cardImg} source={{ uri: cardUri }} />
      ) : (
        <Image style={styles.cardImg} source={CardImage} />
      )}
      <View style={styles.cardData}>
        <View>
          <Text style={[styles.cardTitle]} numberOfLines={2}>
            {CardTitle}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription} numberOfLines={2}>
            {CardDescription}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDate}>{CardDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BeritaDanEventCard
