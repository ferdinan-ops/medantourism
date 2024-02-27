import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saveAndShareWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  share: {
    marginLeft: 16
  },
  header: {
    paddingHorizontal: 25,
    objectFit: 'cover',
    justifyContent: 'space-between',
    height: 450 - 53 - 28
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#fff'
  },
  time: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sameColor: {
    fontSize: 12,
    color: '#fff'
  },
  dot: {
    marginHorizontal: 12
  },
  box: {
    paddingVertical: 22,
    paddingHorizontal: 25,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 50
  },
  information: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#252525'
  },

  popUpWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  popUp: {
    width: '90%',
    height: 363,
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 32
  },
  popUpTitleWrapper: {
    paddingTop: 40,
    width: 170
  },
  popUpTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#252525'
  },
  popUpOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#828282',
    borderWidth: 0.5,
    paddingHorizontal: 24,
    marginTop: 20
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56
  },
  popUpOptionTitle: {
    marginLeft: 24,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#252525'
  },
  containerIcon: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { styles }
