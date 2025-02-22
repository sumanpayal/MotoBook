import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			...commonFlexStyles.flex1,
			...commonMarginStyles.marginM
		},
		countryOuter: {
			gap: scaleWidthPX(16),
			...commonFlexStyles.flexRow
		},
		addessOuter: {
			...commonFlexStyles.flex1,
			gap: scaleHeightPX(16)
		},
		scrollView: {
			...commonFlexStyles.flexRow,
			gap: scaleWidthPX(12)
		},
		saveAddressAs: {
			gap: scaleHeightPX(8)
		},
		addressItem: {
			...commonBorderRadiusStyles.borderRadiusS,
			backgroundColor: colors.inputPlaceholder,
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			...commonPaddingStyles.padding3XS
		}
	})
}
