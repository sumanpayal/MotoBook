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
		containerMultiline: {
			height: scaleHeightPX(180),
			alignItems: 'flex-start'
		},
		inputView: {
			columnGap: scaleWidthPX(16),
			paddingRight: scaleWidthPX(16),
			flexDirection: 'row',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: colors.inputBackground,
			width: '100%',
			height: scaleHeightPX(60),
			borderRadius: 15,
			backgroundColor: colors.inputBackground
		},
		iconView: {
			height: scaleHeightPX(44),
			justifyContent: 'center',
			marginTop: scaleHeightPX(4)
		},
		iconViewImage: {
			marginTop: scaleHeightPX(2)
		},
		input: {
			height: scaleHeightPX(44),
			color: colors.white,
			...commonFontStyles.fontSizeL,
			flex: 1,
			paddingLeft: scaleWidthPX(16)
		},
		inputMultiline: {
			textAlignVertical: 'top',
			height: scaleHeightPX(160),
			paddingTop: scaleHeightPX(12)
		},
		leftImage: {
			width: scaleWidthPX(15),
			height: scaleHeightPX(11)
		}
	})
