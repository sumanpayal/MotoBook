import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import { spacing } from '@src/common/styles/values'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			...commonFlexStyles.flex1,
			...commonAlignStyles.justifyBetween,
			...commonMarginStyles.marginM
		},
		countryOuter: {
			gap: scaleWidthPX(spacing.m),
			...commonFlexStyles.flexRow
		},
		addessOuter: {
			...commonFlexStyles.flex1,
			gap: scaleHeightPX(spacing.m)
		},
		scrollView: {
			...commonFlexStyles.flexRow,
			gap: scaleWidthPX(spacing['3xs'])
		},
		saveAddressAs: {
			gap: scaleHeightPX(spacing['5xs'])
		},
		addressItem: {
			...commonBorderWidthStyles.borderWidthM,
			...commonBorderRadiusStyles.borderRadiusS,
			backgroundColor: colors.inputPlaceholder,
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			gap: scaleWidthPX(spacing['3xs']),
			...commonPaddingStyles.padding3XS
		}
	})
}