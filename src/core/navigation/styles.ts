import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	tabBarStyle: {
		height: scaleHeightPX(70),
		backgroundColor: '#1B2F44',
		marginHorizontal: scaleWidthPX(16),
		marginBottom: scaleHeightPX(16),
		borderRadius: 20,
	},
	textStyle: {
		...commonFontStyles.fontSize2XS,
		textAlign: 'center',
	},
	labelView: {
		justifyContent: 'center',
		alignItems: 'center'
	}
})
