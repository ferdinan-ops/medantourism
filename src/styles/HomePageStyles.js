import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, moderateScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple
  },
  headerContainer: {
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(74),
    gap: verticalScale(20)
  },
  background: {
    width: horizontalScale(277),
    height: verticalScale(272),
    objectFit: 'cover',
    position: 'absolute',
    right: 52,
    bottom: verticalScale(-50)
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profilePicWrapper: {
    backgroundColor: COLORS.gray3,
    borderRadius: 45 / 2,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'contain'
  },
  profilePic: {
    position: 'relative',
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    objectFit: 'contain'
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'Poppins-Bold'
  },
  locationContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center'
  },
  location: {
    color: COLORS.white
  },
  contentContainer: {
    backgroundColor: COLORS.gray5,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    position: 'relative',
    top: 40,
    paddingVertical: verticalScale(51),
    gap: verticalScale(48)
    // backgroundColor: COLORS.white
  },
  menuContainer: {
    flexWrap: 'wrap',
    columnGap: horizontalScale(40),
    rowGap: verticalScale(32),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'space-between'
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(20),
    color: COLORS.black4,
    paddingHorizontal: horizontalScale(25)
  },
  eventContainer: {
    gap: verticalScale(16)
  },
  feedTitle: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    // alignItems: 'center',
    color: COLORS.black3,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: horizontalScale(24)
  },
  feedIcon: {
    height: horizontalScale(32)
  },
  feedContainer: {
    gap: verticalScale(16)
  }
})

export default Styles
