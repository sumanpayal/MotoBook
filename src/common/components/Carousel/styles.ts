import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'

export const carouselStyles = (colors: any) =>
	StyleSheet.create({
		container: {
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%'
		},
		dotsContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: scaleHeightPX(20),
			columnGap: scaleWidthPX(8),
			alignSelf: 'flex-start',
			marginHorizontal: scaleWidthPX(16)
		},
		dot: {
			width: scaleWidthPX(10),
			height: scaleWidthPX(10),
			borderRadius: 100
		},
		activeDot: {
			backgroundColor: colors.primary
		},
		inactiveDot: {
			backgroundColor: colors.inActiveDot
		}
	})
