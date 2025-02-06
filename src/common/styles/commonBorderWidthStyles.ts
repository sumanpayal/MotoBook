import {StyleSheet} from 'react-native';
import {borderWidth} from './values';

const commonBorderWidthStyles = StyleSheet.create({
  borderWidthM: {borderWidth: borderWidth.m},
  borderWidthL: {borderWidth: borderWidth.l},
  borderWidthXL: {borderWidth: borderWidth.xl},
  borderTopWidthM: {borderTopWidth: borderWidth.m},
  borderTopWidthL: {borderTopWidth: borderWidth.l},
  borderTopWidthXL: {borderTopWidth: borderWidth.xl},
  borderBottomWidthM: {borderBottomWidth: borderWidth.m},
  borderBottomWidthL: {borderBottomWidth: borderWidth.l},
  borderBottomWidthXL: {borderBottomWidth: borderWidth.xl},
  borderRightWidthM: {borderRightWidth: borderWidth.m},
  borderRightWidthL: {borderRightWidth: borderWidth.l},
  borderRightWidthXL: {borderRightWidth: borderWidth.xl},
  borderLeftWidthM: {borderLeftWidth: borderWidth.m},
  borderLeftWidthL: {borderLeftWidth: borderWidth.l},
  borderLeftWidthXL: {borderLeftWidth: borderWidth.xl},
});

export default commonBorderWidthStyles;
