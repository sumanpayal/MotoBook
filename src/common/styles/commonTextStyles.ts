import {StyleSheet} from 'react-native';

const commonTextStyles = StyleSheet.create({
  // Text Alignment
  textAuto: {textAlign: 'auto'},
  textLeft: {textAlign: 'left'},
  textCenter: {textAlign: 'center'},
  textRight: {textAlign: 'right'},
  textJustify: {textAlign: 'justify'},

  // Vertical Text Alignment
  textVerticalAuto: {textAlignVertical: 'auto'},
  textVerticalTop: {textAlignVertical: 'top'},
  textVerticalCenter: {textAlignVertical: 'center'},
  textVerticalBottom: {textAlignVertical: 'bottom'},

  // Text Capitalization
  textTransformNone: {textTransform: 'none'},
  textLowercase: {textTransform: 'lowercase'},
  textUppercase: {textTransform: 'uppercase'},
  textCapitalize: {textTransform: 'capitalize'},

  // Text Decoration Line
  textLineNone: {textDecorationLine: 'none'},
  textUnderline: {textDecorationLine: 'underline'},
  textLineThrough: {textDecorationLine: 'line-through'},
  textUnderlineThrough: {textDecorationLine: 'underline line-through'},

  // Text Decoration Style
  textSolid: {textDecorationStyle: 'solid'},
  textDouble: {textDecorationStyle: 'double'},
  textDotted: {textDecorationStyle: 'dotted'},
  textDashed: {textDecorationStyle: 'dashed'},
});

export default commonTextStyles;
