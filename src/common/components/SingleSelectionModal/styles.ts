import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { StyleSheet } from 'react-native'

export const selectionModalStyles = (colors: any) =>
	StyleSheet.create({
		itemSeparator: {
			height: scaleHeightPX(1),
			backgroundColor: colors.backgroundColor
		},
		itemContent: {
			columnGap: scaleWidthPX(8),
			paddingVertical: scaleHeightPX(8),
			alignItems: 'center',
			justifyContent: 'space-between',
			flexDirection: 'row'
		},
		itemLeft: {
			flexDirection: 'row',
			flex: 1,
			alignItems: 'center',
			columnGap: scaleWidthPX(8)
		},
		itemLeftImage: {
			columnGap: scaleWidthPX(12)
		},
		itemImage: {
			width: scaleWidthPX(15),
			height: scaleHeightPX(11)
		},
		itemLabel: {
			...commonFontStyles.fontRegular,
			...commonFontStyles.fontSizeM
		},
		itemRight: {
			paddingVertical: scaleHeightPX(8),
			paddingLeft: scaleWidthPX(8)
		},
		listStyle: {
			marginHorizontal: scaleWidthPX(16)
		},
		listStyleEmpty: {
			alignItems: 'center',
			justifyContent: 'center'
		},
		containerStyle: {
			minHeight: '60%'
		},
		search: {
			marginVertical: scaleHeightPX(22),
			marginHorizontal: scaleWidthPX(16)
		},
		selectedViewOuter: {
			width: scaleWidthPX(20),
			height: scaleWidthPX(20),
			borderWidth: 1,
			borderRadius: scaleWidthPX(20),
			justifyContent: 'center',
			alignItems: 'center',
			borderColor: colors.white
		},
		selectedViewInner: {
			width: scaleWidthPX(12),
			height: scaleWidthPX(12),
			backgroundColor: colors.white,
			borderRadius: scaleWidthPX(12)
		}
	})
