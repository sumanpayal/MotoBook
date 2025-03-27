import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	main: {
		marginHorizontal: scaleWidthPX(16),
		flex: 1
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: scaleWidthPX(18),
		marginVertical: scaleHeightPX(8)
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
})
