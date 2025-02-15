import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	main: {
		...commonMarginStyles.marginHorizontalM,
		...commonFlexStyles.flex1
	},
	container: { 
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: scaleWidthPX(16) 
	},
	center: {
		...commonAlignStyles.justifyCenter,
		...commonAlignStyles.alignCenter,
		...commonFlexStyles.flex1
	}
})
