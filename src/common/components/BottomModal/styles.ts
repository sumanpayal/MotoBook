import commonBorderRadiusStyles from '@commonStyles/commonBorderRadiusStyles'
import commonFlexStyles from '@commonStyles/commonFlexStyles'
import commonAlignStyles from '@commonStyles/commonAlignStyles'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'
import commonPaddingStyles from '@commonStyles/commonPaddingStyles'
import { isTabletMode } from '@src/common/utils/deviceInformation'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import commonFontStyles from '@src/common/styles/commonFontStyles'

const styles = (colors: any) =>
	StyleSheet.create({
		container: {
			width: isTabletMode ? scaleWidthPX(598) : '100%',
			maxHeight: '85%',
			backgroundColor: colors.backgroundColor,
			...commonBorderRadiusStyles.borderTopLeftRadius2XL,
			...commonBorderRadiusStyles.borderTopRightRadius2XL,
			...commonAlignStyles.alignSelfCenter
		},
		headerStyle: {
			...commonFlexStyles.flexRow,
			...commonBorderWidthStyles.borderBottomWidthM,
			borderBottomColor: colors.inputPlaceholder,
			...commonPaddingStyles.paddingM,
			gap: scaleWidthPX(16)
		},
		headerStyleCloseView: {
			width: scaleWidthPX(32),
			height: scaleHeightPX(32),
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			alignSelf: 'center'
		},
		headerStyleMiddleView: {
			...commonFlexStyles.flex1,
			alignSelf: 'center'
		},
		titleStyle: {
			...commonFontStyles.fontSemiBold,
			...commonFontStyles.fontSizeL
		},
		subTitleStyle: {
			...commonFontStyles.fontSizeM
		},
		bottomView: {
			height: scaleHeightPX(24)
		}
	})

export default styles
