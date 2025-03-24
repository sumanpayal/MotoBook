import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const navigationStyles = (Colors: any) => {
	return StyleSheet.create({
		container: {
			height: scaleHeightPX(52),
			justifyContent: 'space-between',
			paddingHorizontal: scaleWidthPX(16),
			flexDirection: 'row',
			alignItems: 'center'
		},
		leftView: {
			flexDirection: 'row',
			columnGap: scaleWidthPX(16),
			flex: 0.75,
			alignItems: 'center'
		},
		titleStyle: {
			...commonFontStyles.fontSizeXL,
			color: Colors.white
		}
	})
}
