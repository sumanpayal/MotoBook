import {StyleSheet} from 'react-native';
import {spacing} from './values';
import {scaleHeightPX, scaleWidthPX} from '@utils/responsiveStyle';

const commonMarginStyles = StyleSheet.create({
  // Individual margin directions for '6xs' spacing
  margin6XS: {margin: scaleWidthPX(spacing['6xs'])},
  marginLeft6XS: {marginStart: scaleWidthPX(spacing['6xs'])},
  marginRight6XS: {marginEnd: scaleWidthPX(spacing['6xs'])},
  marginTop6XS: {marginTop: scaleHeightPX(spacing['6xs'])},
  marginBottom6XS: {marginBottom: scaleHeightPX(spacing['6xs'])},
  marginStart6XS: {marginStart: scaleWidthPX(spacing['6xs'])},
  marginEnd6XS: {marginEnd: scaleWidthPX(spacing['6xs'])},
  marginVertical6XS: {marginVertical: scaleHeightPX(spacing['6xs'])},
  marginHorizontal6XS: {marginHorizontal: scaleWidthPX(spacing['6xs'])},

  // Individual margin directions for '5xs' spacing
  margin5XS: {margin: scaleWidthPX(spacing['5xs'])},
  marginLeft5XS: {marginStart: scaleWidthPX(spacing['5xs'])},
  marginRight5XS: {marginEnd: scaleWidthPX(spacing['5xs'])},
  marginTop5XS: {marginTop: scaleHeightPX(spacing['5xs'])},
  marginBottom5XS: {marginBottom: scaleHeightPX(spacing['5xs'])},
  marginStart5XS: {marginStart: scaleWidthPX(spacing['5xs'])},
  marginEnd5XS: {marginEnd: scaleWidthPX(spacing['5xs'])},
  marginVertical5XS: {marginVertical: scaleHeightPX(spacing['5xs'])},
  marginHorizontal5XS: {marginHorizontal: scaleWidthPX(spacing['5xs'])},

  // Individual margin directions for '4xs' spacing
  margin4XS: {margin: scaleWidthPX(spacing['4xs'])},
  marginLeft4XS: {marginStart: scaleWidthPX(spacing['4xs'])},
  marginRight4XS: {marginEnd: scaleWidthPX(spacing['4xs'])},
  marginTop4XS: {marginTop: scaleHeightPX(spacing['4xs'])},
  marginBottom4XS: {marginBottom: scaleHeightPX(spacing['4xs'])},
  marginStart4XS: {marginStart: scaleWidthPX(spacing['4xs'])},
  marginEnd4XS: {marginEnd: scaleWidthPX(spacing['4xs'])},
  marginVertical4XS: {marginVertical: scaleHeightPX(spacing['4xs'])},
  marginHorizontal4XS: {marginHorizontal: scaleWidthPX(spacing['4xs'])},

  // Individual margin directions for '3xs' spacing
  margin3XS: {margin: scaleWidthPX(spacing['3xs'])},
  marginLeft3XS: {marginStart: scaleWidthPX(spacing['3xs'])},
  marginRight3XS: {marginEnd: scaleWidthPX(spacing['3xs'])},
  marginTop3XS: {marginTop: scaleHeightPX(spacing['3xs'])},
  marginBottom3XS: {marginBottom: scaleHeightPX(spacing['3xs'])},
  marginStart3XS: {marginStart: scaleWidthPX(spacing['3xs'])},
  marginEnd3XS: {marginEnd: scaleWidthPX(spacing['3xs'])},
  marginVertical3XS: {marginVertical: scaleHeightPX(spacing['3xs'])},
  marginHorizontal3XS: {marginHorizontal: scaleWidthPX(spacing['3xs'])},

  // Individual margin directions for '2xs' spacing
  margin2XS: {margin: scaleWidthPX(spacing['2xs'])},
  marginLeft2XS: {marginStart: scaleWidthPX(spacing['2xs'])},
  marginRight2XS: {marginEnd: scaleWidthPX(spacing['2xs'])},
  marginTop2XS: {marginTop: scaleHeightPX(spacing['2xs'])},
  marginBottom2XS: {marginBottom: scaleHeightPX(spacing['2xs'])},
  marginStart2XS: {marginStart: scaleWidthPX(spacing['2xs'])},
  marginEnd2XS: {marginEnd: scaleWidthPX(spacing['2xs'])},
  marginVertical2XS: {marginVertical: scaleHeightPX(spacing['2xs'])},
  marginHorizontal2XS: {marginHorizontal: scaleWidthPX(spacing['2xs'])},

  // Individual margin directions for 'xs' spacing
  marginXS: {margin: scaleWidthPX(spacing['xs'])},
  marginLeftXS: {marginStart: scaleWidthPX(spacing.xs)},
  marginRightXS: {marginEnd: scaleWidthPX(spacing.xs)},
  marginTopXS: {marginTop: scaleHeightPX(spacing.xs)},
  marginBottomXS: {marginBottom: scaleHeightPX(spacing.xs)},
  marginStartXS: {marginStart: scaleWidthPX(spacing.xs)},
  marginEndXS: {marginEnd: scaleWidthPX(spacing.xs)},
  marginVerticalXS: {marginVertical: scaleHeightPX(spacing.xs)},
  marginHorizontalXS: {marginHorizontal: scaleWidthPX(spacing.xs)},

  // Individual margin directions for 's' spacing
  marginS: {margin: scaleWidthPX(spacing['s'])},
  marginLeftS: {marginStart: scaleWidthPX(spacing.s)},
  marginRightS: {marginEnd: scaleWidthPX(spacing.s)},
  marginTopS: {marginTop: scaleHeightPX(spacing.s)},
  marginBottomS: {marginBottom: scaleHeightPX(spacing.s)},
  marginStartS: {marginStart: scaleWidthPX(spacing.s)},
  marginEndS: {marginEnd: scaleWidthPX(spacing.s)},
  marginVerticalS: {marginVertical: scaleHeightPX(spacing.s)},
  marginHorizontalS: {marginHorizontal: scaleWidthPX(spacing.s)},

  // Individual margin directions for 'm' (default medium spacing)
  marginM: {margin: scaleWidthPX(spacing['m'])},
  marginLeftM: {marginStart: scaleWidthPX(spacing.m)},
  marginRightM: {marginEnd: scaleWidthPX(spacing.m)},
  marginTopM: {marginTop: scaleHeightPX(spacing.m)},
  marginBottomM: {marginBottom: scaleHeightPX(spacing.m)},
  marginStartM: {marginStart: scaleWidthPX(spacing.m)},
  marginEndM: {marginEnd: scaleWidthPX(spacing.m)},
  marginVerticalM: {marginVertical: scaleHeightPX(spacing.m)},
  marginHorizontalM: {marginHorizontal: scaleWidthPX(spacing.m)},

  // Individual margin directions for 'l' spacing
  marginL: {margin: scaleWidthPX(spacing['l'])},
  marginLeftL: {marginStart: scaleWidthPX(spacing.l)},
  marginRightL: {marginEnd: scaleWidthPX(spacing.l)},
  marginTopL: {marginTop: scaleHeightPX(spacing.l)},
  marginBottomL: {marginBottom: scaleHeightPX(spacing.l)},
  marginStartL: {marginStart: scaleWidthPX(spacing.l)},
  marginEndL: {marginEnd: scaleWidthPX(spacing.l)},
  marginVerticalL: {marginVertical: scaleHeightPX(spacing.l)},
  marginHorizontalL: {marginHorizontal: scaleWidthPX(spacing.l)},

  // Individual margin directions for 'xl' spacing
  marginXL: {margin: scaleWidthPX(spacing['xl'])},
  marginLeftXL: {marginStart: scaleWidthPX(spacing.xl)},
  marginRightXL: {marginEnd: scaleWidthPX(spacing.xl)},
  marginTopXL: {marginTop: scaleHeightPX(spacing.xl)},
  marginBottomXL: {marginBottom: scaleHeightPX(spacing.xl)},
  marginStartXL: {marginStart: scaleWidthPX(spacing.xl)},
  marginEndXL: {marginEnd: scaleWidthPX(spacing.xl)},
  marginVerticalXL: {marginVertical: scaleHeightPX(spacing.xl)},
  marginHorizontalXL: {marginHorizontal: scaleWidthPX(spacing.xl)},

  // Individual margin directions for '2xl' spacing
  margin2XL: {margin: scaleWidthPX(spacing['2xl'])},
  marginLeft2XL: {marginStart: scaleWidthPX(spacing['2xl'])},
  marginRight2XL: {marginEnd: scaleWidthPX(spacing['2xl'])},
  marginTop2XL: {marginTop: scaleHeightPX(spacing['2xl'])},
  marginBottom2XL: {marginBottom: scaleHeightPX(spacing['2xl'])},
  marginStart2XL: {marginStart: scaleWidthPX(spacing['2xl'])},
  marginEnd2XL: {marginEnd: scaleWidthPX(spacing['2xl'])},
  marginVertical2XL: {marginVertical: scaleHeightPX(spacing['2xl'])},
  marginHorizontal2XL: {marginHorizontal: scaleWidthPX(spacing['2xl'])},

  // Individual margin directions for '3xl' spacing
  margin3XL: {margin: scaleWidthPX(spacing['3xl'])},
  marginLeft3XL: {marginStart: scaleWidthPX(spacing['3xl'])},
  marginRight3XL: {marginEnd: scaleWidthPX(spacing['3xl'])},
  marginTop3XL: {marginTop: scaleHeightPX(spacing['3xl'])},
  marginBottom3XL: {marginBottom: scaleHeightPX(spacing['3xl'])},
  marginStart3XL: {marginStart: scaleWidthPX(spacing['3xl'])},
  marginEnd3XL: {marginEnd: scaleWidthPX(spacing['3xl'])},
  marginVertical3XL: {marginVertical: scaleHeightPX(spacing['3xl'])},
  marginHorizontal3XL: {marginHorizontal: scaleWidthPX(spacing['3xl'])},

  // Individual margin directions for '4xl' spacing
  margin4XL: {margin: scaleWidthPX(spacing['4xl'])},
  marginLeft4XL: {marginStart: scaleWidthPX(spacing['4xl'])},
  marginRight4XL: {marginEnd: scaleWidthPX(spacing['4xl'])},
  marginTop4XL: {marginTop: scaleHeightPX(spacing['4xl'])},
  marginBottom4XL: {marginBottom: scaleHeightPX(spacing['4xl'])},
  marginStart4XL: {marginStart: scaleWidthPX(spacing['4xl'])},
  marginEnd4XL: {marginEnd: scaleWidthPX(spacing['4xl'])},
  marginVertical4XL: {marginVertical: scaleHeightPX(spacing['4xl'])},
  marginHorizontal4XL: {marginHorizontal: scaleWidthPX(spacing['4xl'])},

  // Individual margin directions for '5xl' spacing
  margin5XL: {margin: scaleWidthPX(spacing['5xl'])},
  marginLeft5XL: {marginStart: scaleWidthPX(spacing['5xl'])},
  marginRight5XL: {marginEnd: scaleWidthPX(spacing['5xl'])},
  marginTop5XL: {marginTop: scaleHeightPX(spacing['5xl'])},
  marginBottom5XL: {marginBottom: scaleHeightPX(spacing['5xl'])},
  marginStart5XL: {marginStart: scaleWidthPX(spacing['5xl'])},
  marginEnd5XL: {marginEnd: scaleWidthPX(spacing['5xl'])},
  marginVertical5XL: {marginVertical: scaleHeightPX(spacing['5xl'])},
  marginHorizontal5XL: {marginHorizontal: scaleWidthPX(spacing['5xl'])},

  // Individual margin directions for '6xl' spacing
  margin6XL: {margin: scaleWidthPX(spacing['6xl'])},
  marginLeft6XL: {marginStart: scaleWidthPX(spacing['6xl'])},
  marginRight6XL: {marginEnd: scaleWidthPX(spacing['6xl'])},
  marginTop6XL: {marginTop: scaleHeightPX(spacing['6xl'])},
  marginBottom6XL: {marginBottom: scaleHeightPX(spacing['6xl'])},
  marginStart6XL: {marginStart: scaleWidthPX(spacing['6xl'])},
  marginEnd6XL: {marginEnd: scaleWidthPX(spacing['6xl'])},
  marginVertical6XL: {marginVertical: scaleHeightPX(spacing['6xl'])},
  marginHorizontal6XL: {marginHorizontal: scaleWidthPX(spacing['6xl'])},

  // Individual margin directions for '7xl' spacing
  margin7XL: {margin: scaleWidthPX(spacing['7xl'])},
  marginLeft7XL: {marginStart: scaleWidthPX(spacing['7xl'])},
  marginRight7XL: {marginEnd: scaleWidthPX(spacing['7xl'])},
  marginTop7XL: {marginTop: scaleHeightPX(spacing['7xl'])},
  marginBottom7XL: {marginBottom: scaleHeightPX(spacing['7xl'])},
  marginStart7XL: {marginStart: scaleWidthPX(spacing['7xl'])},
  marginEnd7XL: {marginEnd: scaleWidthPX(spacing['7xl'])},
  marginVertical7XL: {marginVertical: scaleHeightPX(spacing['7xl'])},
  marginHorizontal7XL: {marginHorizontal: scaleWidthPX(spacing['7xl'])},
});

export default commonMarginStyles;
