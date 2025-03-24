import { StyleSheet } from 'react-native'
import { scaleFontSize } from '@utils/responsiveStyle'

const commonFontStyles = StyleSheet.create({
	fontSize2XS: { fontSize: scaleFontSize(10) },
	fontSizeXS: { fontSize: scaleFontSize(12) },
	fontSizeS: { fontSize: scaleFontSize(14) },
	fontSizeM: { fontSize: scaleFontSize(16) },
	fontSizeL: { fontSize: scaleFontSize(18) },
	fontSizeXL: { fontSize: scaleFontSize(20) },
	fontSize2XL: { fontSize: scaleFontSize(22) },
	fontSize3XL: { fontSize: scaleFontSize(24) },
	fontSize4XL: { fontSize: scaleFontSize(26) },
	fontSize5XL: { fontSize: scaleFontSize(28) },
	fontRegular: {
		fontWeight: '400',
		fontFamily: 'EncodeSans-Regular'
	},
	fontMedium: {
		fontWeight: '500',
		fontFamily: 'EncodeSans-Medium'
	},
	fontSemiBold: {
		fontWeight: '600',
		fontFamily: 'EncodeSans-SemiBold'
	},
	fontBold: {
		fontWeight: '700',
		fontFamily: 'EncodeSans-Bold'
	}
})

export default commonFontStyles
