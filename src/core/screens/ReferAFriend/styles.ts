import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingHorizontal: scaleWidthPX(25)
	}
})
