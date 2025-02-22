import commonAlignStyles from "@src/common/styles/commonAlignStyles"
import commonFlexStyles from "@src/common/styles/commonFlexStyles"
import commonMarginStyles from "@src/common/styles/commonMarginStyles"
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
		colorItem: {
			borderWidth: 1, borderColor: colors.inputPlaceholder, width: scaleWidthPX(24), height: scaleWidthPX(24), borderRadius: scaleWidthPX(12), justifyContent: 'center', alignItems: 'center', marginRight: scaleWidthPX(8)
		}
	})
}