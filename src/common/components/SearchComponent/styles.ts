import commonFontStyles from '@commonStyles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'

const styles = (colors: any) =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'space-between',
			flexDirection: 'row',
			width: '100%'
		},
		input: {
			...commonFontStyles.fontSizeL,
			...commonFontStyles.fontSemiBold,
			flex: 1,
			color: colors.white,
			textAlign: 'left'
		},
		inputPlaceholder: {
			...commonFontStyles.fontSizeL
		},
		searchContainer: {
			alignItems: 'center',
			borderRadius: 15,
			flexDirection: 'row',
			paddingLeft: scaleWidthPX(16),
			paddingRight: scaleWidthPX(10),
			height: scaleHeightPX(50),
			columnGap: scaleWidthPX(16),
			borderColor: colors.inputPlaceholder,
			borderWidth: 1
		},
		clearButton: {
			padding: scaleWidthPX(6)
		}
	})

export default styles
