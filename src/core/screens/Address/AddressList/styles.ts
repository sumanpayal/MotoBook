import { StyleSheet } from 'react-native'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			margin: scaleWidthPX(16)
		},
		addressItem: {
			borderRadius: 8,
			backgroundColor: colors.inputPlaceholder,
			justifyContent: 'center',
			alignItems: 'center',
			padding: scaleWidthPX(8)
		}
	})
}
