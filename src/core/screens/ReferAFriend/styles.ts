import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const createStyles = (colors: any) =>
	StyleSheet.create({
		main: {
			flex: 1,
			marginHorizontal: scaleWidthPX(25)
		}
	})
