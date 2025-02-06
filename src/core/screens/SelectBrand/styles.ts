import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	main: {
		...commonMarginStyles.marginHorizontalM,
		...commonFlexStyles.flex1
	},
	center: {
		...commonAlignStyles.justifyCenter,
		...commonAlignStyles.alignCenter,
		...commonFlexStyles.flex1
	}
})
