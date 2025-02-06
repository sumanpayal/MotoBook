import commonAlignStyles from '@commonStyles/commonAlignStyles'
import commonBorderRadiusStyles from '@commonStyles/commonBorderRadiusStyles'
import commonFlexStyles from '@commonStyles/commonFlexStyles'
import commonFontStyles from '@commonStyles/commonFontStyles'
import commonPaddingStyles from '@commonStyles/commonPaddingStyles'
import { spacing } from '@commonStyles/values'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import commonTextStyles from '@src/common/styles/commonTextStyles'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'

const styles = (colors: any) =>
	StyleSheet.create({
		container: {
			...commonAlignStyles.alignCenter,
			...commonAlignStyles.justifyBetween,
			...commonFlexStyles.flexRow,
			width: '100%'
		},
		input: {
			...commonFontStyles.fontSizeM,
			...commonFontStyles.fontSemiBold,
			...commonPaddingStyles.paddingVerticalM,
			...commonFlexStyles.flex1,
			color: colors.textColor,
			...commonTextStyles.textLeft
		},
		inputPlaceholder: {
			...commonFontStyles.fontSizeS,
			...commonFontStyles.fontRegular
		},
		searchContainer: {
			...commonAlignStyles.alignCenter,
			...commonBorderRadiusStyles.borderRadiusCircle,
			...commonFlexStyles.flexRow,
			...commonPaddingStyles.paddingHorizontalM,
			height: scaleHeightPX(56),
			columnGap: scaleWidthPX(spacing.m),
			borderColor: colors.inputPlaceholder,
			...commonBorderWidthStyles.borderWidthM
		},
		clearButton: {
			...commonPaddingStyles.padding4XS
		},
	})

export default styles
