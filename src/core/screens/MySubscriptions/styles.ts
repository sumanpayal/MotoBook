import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			marginHorizontal: scaleWidthPX(25)
		},
		carsButton: {
			position: 'absolute',
			right: scaleWidthPX(0),
			width: scaleWidthPX(60),
			height: scaleWidthPX(60),
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 100,
			backgroundColor: colors.primary
		},
		item: {
			borderRadius: 15,
			paddingHorizontal: scaleWidthPX(24),
			backgroundColor: colors.borderColor,
			paddingTop: scaleHeightPX(16),
			paddingBottom: scaleHeightPX(12)
		},
		carImage: {
			width: scaleWidthPX(151),
			height: scaleHeightPX(85),
			marginBottom: scaleHeightPX(2)
		},
		itemInner: {
			borderWidth: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			flex: 1,
			height: scaleHeightPX(85)
		},
		center: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
		},
		image: {
			position: 'absolute',
			right: scaleWidthPX(24),
			top: scaleHeightPX(16)
		}
	})
}
