import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'

export const carouselStyles = (colors: any) =>
	StyleSheet.create({
		dotsContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: scaleHeightPX(20),
			columnGap: scaleWidthPX(8),
			marginHorizontal: scaleWidthPX(16)
		},
		activeDot: {
			backgroundColor: colors.primary,
			width: scaleWidthPX(10),
			height: scaleWidthPX(10),
			borderRadius: 100
		},
		inactiveDot: {
			backgroundColor: colors.inActiveDot,
			width: scaleWidthPX(10),
			height: scaleWidthPX(10),
			borderRadius: 100
		}
	})
