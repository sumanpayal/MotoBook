import commonFontStyles from '@commonStyles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const inputStyles = (colors: any) =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			columnGap: scaleWidthPX(8)
		},
		main: {
			flex: 1,
			gap: scaleHeightPX(8)
		},
		inputView: {
			columnGap: scaleWidthPX(16),
			paddingHorizontal: scaleWidthPX(16),
			flexDirection: 'row',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: colors.inputBackground,
			width: '100%',
			height: scaleHeightPX(60),
			borderRadius: 15,
			backgroundColor: colors.inputBackground
		},
		input: {
			color: colors.white,
			...commonFontStyles.fontSizeL,
			flex: 1
		}
	})
