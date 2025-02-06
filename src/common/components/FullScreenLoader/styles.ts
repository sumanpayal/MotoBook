import commonAlignStyles from '@src/common/styles/commonAlignStyles';
import commonFlexStyles from '@src/common/styles/commonFlexStyles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@src/common/utils/deviceInformation';
import {StyleSheet} from 'react-native';

const FullScreenLoaderStyles = (colors: any) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: colors.loaderBackground,
      position: 'absolute',
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      ...commonFlexStyles.flex1,
      ...commonAlignStyles.alignCenter,
      ...commonAlignStyles.justifyCenter,
    },
    center: {
      ...commonAlignStyles.alignCenter,
      ...commonAlignStyles.justifyCenter,
    },
  });

export default FullScreenLoaderStyles;
