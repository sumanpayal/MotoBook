import { StyleSheet } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const createStyles = (colors: any) => {
	return StyleSheet.create({
		main: {
			flex: 1,
			paddingHorizontal: scaleWidthPX(16)
		},
		item: {
			flexDirection: 'row',
			gap: scaleWidthPX(16),
			borderRadius: 12,
			padding: 16,
			alignItems: 'center',
			justifyContent: 'space-between'
		},
		seperator: {
			height: 1,
			backgroundColor: colors.inputPlaceholder,
			marginVertical: scaleHeightPX(8)
		}
	})
}
