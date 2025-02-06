import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  isTabletMode,
  isZoomed,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from './deviceInformation';

const baseHeight = isTabletMode ? 1080 : 844;
const baseWidth = isTabletMode ? 810 : 390;
/**
 * scaleHeightPX is used for vertical styles eg: marginTop, marginBottom, marginVertical, height
 * @param h - Number
 * @returns
 */
export const scaleHeightPX = (h: number) => {
  if (SCREEN_HEIGHT > baseHeight) return h;
  const ratio = SCREEN_HEIGHT / baseHeight;
  const responsiveHeight = h * ratio;
  return Math.floor(responsiveHeight);
};

/**
 * scaleWidthPX is used for horizontal styles eg: marginLeft, marginRight, marginHorizontal, width
 * @param w - Number
 * @returns
 */
export const scaleWidthPX = (w: number) => {
  if (SCREEN_WIDTH > baseWidth) return w;
  const ratio = SCREEN_WIDTH / baseWidth;
  const responsiveHeight = w * ratio;
  return Math.floor(responsiveHeight);
};

/**
 * scaleFontSize is used for font size eg: fontSize
 * @param f - Number
 * @returns
 */
export const scaleFontSize = (f: number) => {
  return isTabletMode || Platform.OS == 'android'
    ? RFValue(f, baseHeight)
    : isZoomed()
      ? f * 0.8
      : f;
};
