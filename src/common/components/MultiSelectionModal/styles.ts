import commonAlignStyles from '@commonStyles/commonAlignStyles'
import commonFlexStyles from '@commonStyles/commonFlexStyles'
import commonPaddingStyles from '@commonStyles/commonPaddingStyles'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
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
			...commonPaddingStyles.paddingVertical3XS,
			...commonAlignStyles.alignCenter,
			...commonAlignStyles.justifyBetween,
			...commonFlexStyles.flexRow
		},
		itemLeft: {
			...commonFlexStyles.flexRow,
			...commonFlexStyles.flex1,
			...commonAlignStyles.alignCenter,
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
			...commonPaddingStyles.paddingLeft3XS,
			...commonPaddingStyles.paddingVertical3XS
		},
		listStyle: {
			...commonMarginStyles.marginHorizontalM
		},
		listStyleEmpty: {
			...commonAlignStyles.alignCenter,
			...commonAlignStyles.justifyCenter
		},
		containerStyle: {
			minHeight: '60%'
		},
		search: {
			...commonMarginStyles.marginVertical2XL,
			...commonMarginStyles.marginHorizontalM
		},
		selectedViewOuter: {
			width: scaleWidthPX(24),
			height: scaleWidthPX(24),
			borderWidth: 1,
			borderRadius: 4,
			justifyContent: 'center',
			alignItems: 'center',
			borderColor: colors.textColor
		},
		selectedViewInner: {
			width: scaleWidthPX(12),
			height: scaleWidthPX(12),
			backgroundColor: colors.textColor,
			borderRadius: scaleWidthPX(12)
		}
	})
