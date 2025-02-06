import commonAlignStyles from '@commonStyles/commonAlignStyles'
import { spacing } from '@src/common/styles/values'
import { scaleHeightPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		...commonAlignStyles.alignCenter,
		...commonAlignStyles.justifyCenter,
		gap: scaleHeightPX(spacing.m)
	}
})
