import {StyleSheet} from 'react-native';

const commonAlignStyles = StyleSheet.create({
  // Horizontal alignments (justifyContent)
  justifyStart: {justifyContent: 'flex-start'},
  justifyCenter: {justifyContent: 'center'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyAround: {justifyContent: 'space-around'},
  justifyEvenly: {justifyContent: 'space-evenly'},

  // Vertical alignments (alignItems)
  alignStart: {alignItems: 'flex-start'},
  alignCenter: {alignItems: 'center'},
  alignEnd: {alignItems: 'flex-end'},
  alignStretch: {alignItems: 'stretch'},

  // Single item alignment (alignSelf)
  alignSelfAuto: {alignSelf: 'auto'},
  alignSelfStart: {alignSelf: 'flex-start'},
  alignSelfCenter: {alignSelf: 'center'},
  alignSelfEnd: {alignSelf: 'flex-end'},
  alignSelfStretch: {alignSelf: 'stretch'},

  // Multi-line content alignment (alignContent)
  alignContentStart: {alignContent: 'flex-start'},
  alignContentCenter: {alignContent: 'center'},
  alignContentEnd: {alignContent: 'flex-end'},
  alignContentStretch: {alignContent: 'stretch'},
  alignContentSpaceBetween: {alignContent: 'space-between'},
  alignContentSpaceAround: {alignContent: 'space-around'},
});

export default commonAlignStyles;
