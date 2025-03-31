import { scaleHeightPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: scaleHeightPX(16)
	}
})
