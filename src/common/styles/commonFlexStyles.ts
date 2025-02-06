import {StyleSheet} from 'react-native';

const commonFlexStyles = StyleSheet.create({
  // flex1
  flex1: {flex: 1},

  // Flex container (flexDirection)
  flexRow: {flexDirection: 'row'},
  flexColumn: {flexDirection: 'column'},
  flexRowReverse: {flexDirection: 'row-reverse'},
  flexColumnReverse: {flexDirection: 'column-reverse'},

  // Flex wrapping
  flexWrap: {flexWrap: 'wrap'},
  flexWrapReverse: {flexWrap: 'wrap-reverse'},
  flexNoWrap: {flexWrap: 'nowrap'},
});

export default commonFlexStyles;
