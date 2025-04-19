import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) => StyleSheet.create({
	tabBarStyle: {
		height: scaleHeightPX(74),
		backgroundColor: colors.backgroundColor,
	},
	textStyle: {
		...commonFontStyles.fontSize2XS,
		textAlign: 'center',
	},
	labelView: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabBar: {
		height: scaleHeightPX(74),
		width: scaleWidthPX(74),
		alignItems: 'center'
	},
	centralButtonContainer: {
		width: scaleWidthPX(60),
		height: scaleHeightPX(60),
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.white + '4d',
		borderRadius: 100,
		position: 'absolute',
		top: -13,
		backgroundColor: colors.backgroundColor
	}
})
