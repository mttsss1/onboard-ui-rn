import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  image: {
    marginVertical: 60
  },
  title: {
    fontSize: 24,
    color: theme.colors.black,
    textAlign: 'center',
    fontFamily: theme.fonts.text700,
    marginHorizontal: 60
  },
  text: {
    fontSize: 14,
    color: theme.colors.black,
    textAlign: 'center',
    fontFamily: theme.fonts.text600,
    marginHorizontal: 60,
    marginTop: 20
  },
  rightTextWrapper: {
    height: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightText: {
    color: theme.colors.blue,
    fontFamily: theme.fonts.text600,
    fontSize: 14
  },
  leftTextWrapper: {
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: theme.colors.blue,
    fontFamily: theme.fonts.text600,
    fontSize: 14
  },
  dotStyle: {
    backgroundColor: theme.colors.blueFaded,

  },
  activeDotStyle: {
    backgroundColor: theme.colors.blue,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    borderRadius: 25,
    marginRight: -40
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: theme.fonts.text600,
    margin: 10,
    color: theme.colors.white
  }
}) 