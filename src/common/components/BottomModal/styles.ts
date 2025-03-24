import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'
import { isTabletMode } from '@src/common/utils/deviceInformation'
import commonFontStyles from '@src/common/styles/commonFontStyles'

const styles = (colors: any) =>
	StyleSheet.create({
		container: {
			width: isTabletMode ? scaleWidthPX(598) : '100%',
			maxHeight: '85%',
			backgroundColor: colors.backgroundColor,
			borderTopLeftRadius: scaleWidthPX(20),
			borderTopRightRadius: scaleWidthPX(20),
			alignSelf: 'center'
		},
		headerStyle: {
			flexDirection: 'row',
			borderBottomColor: colors.backgroundColor,
			padding: scaleWidthPX(16),
			gap: scaleWidthPX(16)
		},
		headerStyleCloseView: {
			width: scaleWidthPX(32),
			height: scaleHeightPX(32),
			justifyContent: 'center',
			alignItems: 'center'
		},
		headerStyleMiddleView: {
			flex: 1,
			alignSelf: 'center'
		},
		titleStyle: {
			...commonFontStyles.fontSizeXL
		},
		subTitleStyle: {
			...commonFontStyles.fontSizeM
		},
		bottomView: {
			height: scaleHeightPX(24)
		}
	})

export default styles
