import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			marginHorizontal: scaleWidthPX(16)
		},
		carsButton: {
			position: 'absolute',
			bottom: scaleWidthPX(24),
			right: scaleWidthPX(24),
			width: scaleWidthPX(55),
			height: scaleWidthPX(55),
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 100,
			backgroundColor: colors.primary
		},
		item: {
			flexDirection: 'row',
			gap: scaleWidthPX(16),
			borderWidth: 1,
			borderColor: colors.inputPlaceholder,
			borderRadius: 12,
			padding: 16,
			alignItems: 'center'
		},
		carImage: {
			width: scaleWidthPX(50),
			height: scaleHeightPX(40),
			borderRadius: 8,
			borderWidth: 1,
			borderColor: colors.inputPlaceholder
		},
		itemInner: {
			flex: 1,
			gap: scaleHeightPX(4)
		},
		center: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
		}
	})
}
