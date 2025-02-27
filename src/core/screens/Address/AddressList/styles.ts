import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			...commonFlexStyles.flex1,
			...commonMarginStyles.marginM
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
