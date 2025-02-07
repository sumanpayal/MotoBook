import commonAlignStyles from "@src/common/styles/commonAlignStyles"
import commonBorderRadiusStyles from "@src/common/styles/commonBorderRadiusStyles"
import commonBorderWidthStyles from "@src/common/styles/commonBorderWidthStyles"
import commonFlexStyles from "@src/common/styles/commonFlexStyles"
import commonMarginStyles from "@src/common/styles/commonMarginStyles"
import commonPaddingStyles from "@src/common/styles/commonPaddingStyles"
import { spacing } from "@src/common/styles/values"
import { scaleHeightPX, scaleWidthPX } from "@src/common/utils/responsiveStyle"
import { StyleSheet } from "react-native"

export const createStyle = (colors: any) => {
	return StyleSheet.create({
		main: {
			...commonFlexStyles.flex1,
			...commonAlignStyles.justifyBetween,
			...commonMarginStyles.marginM
		},
		addAddress: {
			...commonAlignStyles.justifyEnd,
			...commonFlexStyles.flexRow,
			gap: scaleWidthPX(spacing['3xs']),
			...commonAlignStyles.alignCenter
		},
		form: {
			...commonFlexStyles.flex1,
			gap: scaleHeightPX(spacing.m)
		},
		colorOuter: {
			gap: scaleWidthPX(spacing['3xs']),
			...commonMarginStyles.marginVerticalXL
		},
		colorInner: {
			...commonFlexStyles.flexRow,
			...commonFlexStyles.flexWrap,
			gap: scaleWidthPX(spacing.m)
		},
		colorItem: {
			...commonBorderWidthStyles.borderWidthM,
			borderColor: colors.textColor,
			backgroundColor: colors.textColor,
			width: scaleWidthPX(spacing['3xl']),
			height: scaleWidthPX(spacing['3xl']),
			...commonBorderRadiusStyles.borderRadiusCircle
		},
		colorItemView: {
			...commonBorderWidthStyles.borderWidthM,
			...commonBorderRadiusStyles.borderRadiusS,
			borderColor: colors.inputPlaceholder,
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			gap: scaleWidthPX(spacing['3xs']),
			...commonPaddingStyles.padding3XS
		}
	})
}