import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			justifyContent: 'space-between',
			marginHorizontal: scaleWidthPX(16),
			marginTop: scaleHeightPX(24)
		},
		countryOuter: {
			gap: scaleWidthPX(16),
			flexDirection: 'row'
		},
		addessOuter: {
			flex: 1,
			gap: scaleHeightPX(16)
		},
		scrollView: {
			flexDirection: 'row',
			gap: scaleWidthPX(12)
		},
		saveAddressAs: {
			gap: scaleHeightPX(8)
		},
		addressItem: {
			borderRadius: 8,
			backgroundColor: colors.inputBackground,
			justifyContent: 'center',
			alignItems: 'center',
			padding: scaleWidthPX(8)
		}
	})
}
