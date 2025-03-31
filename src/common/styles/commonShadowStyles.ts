import {Platform, StyleSheet} from 'react-native';

const commonShadowStyles = (color: any) =>
  StyleSheet.create({
    cardShodowStyle: {
      shadowColor: color,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 10,
      elevation: Platform.OS === 'android' ? 20 : 4.5,
    },
  });

export default commonShadowStyles;
