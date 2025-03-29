import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) => StyleSheet.create({
	tabBarStyle: {
		height: scaleHeightPX(70),
		backgroundColor: colors.borderColor,
		marginHorizontal: scaleWidthPX(16),
		marginBottom: scaleHeightPX(16),
		borderRadius: 20,
	},
	textStyle: {
		...commonFontStyles.fontSize3XS,
		textAlign: 'center',
	},
	labelView: {
		justifyContent: 'center',
		alignItems: 'center'
	}
})
