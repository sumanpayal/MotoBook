import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) =>
	StyleSheet.create({
		main: {
			flex: 1,
			marginHorizontal: scaleWidthPX(16)
		},
		container: {
			flexDirection: 'row',
			gap: scaleWidthPX(12),
			backgroundColor: colors.primary,
			borderRadius: 8,
			paddingHorizontal: scaleWidthPX(12)
		},
		subContainer: {
			flex: 1,
			gap: scaleWidthPX(4),
			paddingVertical: scaleHeightPX(16)
		},
		subView: {
			justifyContent: 'center',
			alignItems: 'center',
			height: scaleHeightPX(40),
			backgroundColor: colors.textColor,
			borderRadius: 4
		},
		imageOuterView: {
			borderWidth: 1,
			borderColor: colors.inputPlaceholder,
			borderRadius: 8,
			width: scaleWidthPX(300),
			height: scaleHeightPX(300),
			alignSelf: 'center',
			marginVertical: scaleHeightPX(44),
			justifyContent: 'center',
			alignItems: 'center'
		},
		topView: {
			gap: scaleHeightPX(8),
			marginBottom: scaleHeightPX(28)
		},
		codeView: {
			borderRadius: 8,
			backgroundColor: colors.borderColorInputFocused,
			paddingVertical: scaleHeightPX(16),
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
			paddingHorizontal: scaleWidthPX(16)
		},
		bottomView: {
			paddingHorizontal: scaleWidthPX(12),
			backgroundColor: colors.borderColorInputFocused,
			marginTop: scaleHeightPX(44),
			borderRadius: 8
		}
	})
