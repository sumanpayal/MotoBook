import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			margin: scaleWidthPX(16)
		},
		add: {
			position: 'absolute',
			bottom: scaleWidthPX(24),
			right: scaleWidthPX(16),
			width: scaleWidthPX(60),
			height: scaleWidthPX(60),
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 25,
			backgroundColor: colors.primary
		},
		item: {
			borderRadius: 15,
			paddingHorizontal: scaleWidthPX(20),
			backgroundColor: '#1B2F44',
			paddingVertical: scaleHeightPX(16)
		},
		carImage: {
			width: scaleWidthPX(151),
			height: scaleHeightPX(85)
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
			right: scaleWidthPX(16),
			top: scaleHeightPX(16)
		}
	})
}
