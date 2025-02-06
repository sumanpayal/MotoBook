import {StyleSheet} from 'react-native';
import {fontSize, fontWeight} from './values';
import {scaleFontSize} from '@utils/responsiveStyle';

const commonFontStyles = StyleSheet.create({
  fontSize2XS: {fontSize: scaleFontSize(fontSize?.['2xs'])},
  fontSizeXS: {fontSize: scaleFontSize(fontSize.xs)},
  fontSizeS: {fontSize: scaleFontSize(fontSize.s)},
  fontSizeM: {fontSize: scaleFontSize(fontSize.m)},
  fontSizeL: {fontSize: scaleFontSize(fontSize.l)},
  fontSizeXL: {fontSize: scaleFontSize(fontSize.xl)},
  fontSize2XL: {fontSize: scaleFontSize(fontSize['2xl'])},
  fontSize3XL: {fontSize: scaleFontSize(fontSize['3xl'])},
  fontSize4XL: {fontSize: scaleFontSize(fontSize['4xl'])},
  fontRegular: {
    fontWeight: fontWeight.s,
    fontFamily: 'EncodeSans-Regular',
  },
  fontMedium: {
    fontWeight: fontWeight.m,
    fontFamily: 'EncodeSans-Medium',
  },
  fontSemiBold: {
    fontWeight: fontWeight.l,
    fontFamily: 'EncodeSans-SemiBold',
  },
  fontBold: {
    fontWeight: fontWeight.xl,
    fontFamily: 'EncodeSans-Bold',
  },
});

export default commonFontStyles;
