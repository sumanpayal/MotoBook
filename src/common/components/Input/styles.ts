import commonAlignStyles from '@commonStyles/commonAlignStyles';
import commonBorderRadiusStyles from '@commonStyles/commonBorderRadiusStyles';
import commonBorderWidthStyles from '@commonStyles/commonBorderWidthStyles';
import commonFlexStyles from '@commonStyles/commonFlexStyles';
import commonFontStyles from '@commonStyles/commonFontStyles';
import commonPaddingStyles from '@commonStyles/commonPaddingStyles';
import {spacing} from '@commonStyles/values';
import commonMarginStyles from '@src/common/styles/commonMarginStyles';
import {scaleHeightPX, scaleWidthPX} from '@utils/responsiveStyle';
import {StyleSheet} from 'react-native';

export const inputStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      ...commonBorderWidthStyles.borderWidthM,
      ...commonPaddingStyles.paddingHorizontalM,
      ...commonFlexStyles.flexRow,
      ...commonAlignStyles.alignCenter,
      ...commonAlignStyles.justifyBetween,
      ...commonBorderRadiusStyles.borderRadiusS,
      height: scaleHeightPX(60),
      borderColor: colors.inputPlaceholder,
      columnGap: scaleWidthPX(spacing['3xs']),
    },
    containerMultiline: {
      height: scaleHeightPX(180),
      ...commonAlignStyles.alignStart,
    },
    inputView: {
      columnGap: scaleWidthPX(spacing['3xs']),
      ...commonFlexStyles.flexRow,
      ...commonAlignStyles.alignCenter,
    },
    iconView: {
      height: scaleHeightPX(44),
      ...commonAlignStyles.justifyCenter,
      ...commonMarginStyles.marginTop5XS,
    },
    iconViewImage: {
      ...commonMarginStyles.marginTop6XS,
    },
    input: {
      height: scaleHeightPX(44),
      color: colors.textColor,
      ...commonFontStyles.fontMedium,
      ...commonFontStyles.fontSizeM,
      ...commonFlexStyles.flex1,
    },
    inputMultiline: {
      textAlignVertical: 'top',
      height: scaleHeightPX(160),
      ...commonPaddingStyles.paddingTopXS,
    },
    leftImage: {
      width: scaleWidthPX(15),
      height: scaleHeightPX(11),
    },
  });
