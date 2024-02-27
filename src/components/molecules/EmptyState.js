import { Image, Text, View, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'
import { horizontalScale } from '../../theme/responsive'

const EmptyState = ({ title, subTitle, isNotPage }) => {
  return (
    <View style={[styles.container, !isNotPage && { flex: 1 }]}>
      <View style={{ gap: isNotPage ? 0 : 29, alignItems: 'center' }}>
        <Image
          source={require('../../assets/img/empty_image.png')}
          style={[styles.image, { width: isNotPage ? 160 : 230 }]}
        />
        <View style={{ gap: 8, paddingHorizontal: horizontalScale(26) }}>
          {!isNotPage && <Text style={styles.title}>{title}</Text>}
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  image: { objectFit: 'contain' },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#3B4949',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#3B4949',
    textAlign: 'center'
  }
})

export default EmptyState
