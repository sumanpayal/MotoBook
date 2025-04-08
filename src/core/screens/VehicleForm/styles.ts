import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyle = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			justifyContent: 'space-between',
			marginHorizontal: scaleWidthPX(16),
			paddingTop: scaleHeightPX(24)
		},
		addAddress: {
			flexDirection: 'row',
			gap: scaleWidthPX(8),
			alignItems: 'center'
		},
		form: {
			flex: 1,
			gap: scaleHeightPX(16)
		},
		colorItem: {
			borderWidth: 1,
			borderColor: colors.inputPlaceholder,
			width: scaleWidthPX(24),
			height: scaleWidthPX(24),
			borderRadius: scaleWidthPX(12),
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: scaleWidthPX(8)
		},
		flexRow: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			flex: 1,
			gap: scaleWidthPX(16)
		},
		flex5: {
			flex: 0.5
		},
		registrationIconBg: {
			width: scaleWidthPX(34),
			height: scaleHeightPX(61),
			backgroundColor: colors.registrationBg,
			borderTopLeftRadius: 15,
			borderBottomLeftRadius: 15,
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: -2
		}
	})
}
