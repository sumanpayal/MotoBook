import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'

interface BrandItemProps {
	onPress: () => void
	item: any
	selected?: any
	isModal?: boolean
}

const BrandItem = (props: BrandItemProps) => {
	const { onPress, item, selected, isModal = false } = props
	const { colors } = useTheme()
	const styles = selectionModalStyles(colors)
	return (
		<Pressable onPress={onPress} style={{ ...styles.item, backgroundColor: selected?._id === item?._id ? colors.primary : colors.inputBackground }}>
			<View style={[styles.image, isModal && styles.imageModal]} />
			<CustomText numberOfLines={1} style={{ ...commonFontStyles.fontSizeL, textAlign: 'center', color: selected?._id === item?._id ? colors.backgroundColor : colors.white }}>
				{item?.name}
			</CustomText>
		</Pressable>
	)
}

export default BrandItem

const selectionModalStyles = (colors: any) =>
	StyleSheet.create({
		item: {
			borderRadius: 15,
			width: scaleWidthPX(120),
			height: scaleWidthPX(120),
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: scaleWidthPX(2),
			paddingVertical: scaleHeightPX(16),
			gap: scaleHeightPX(6)
		},
		image: {
			width: scaleWidthPX(64),
			height: scaleWidthPX(64),
			borderRadius: 100,
			backgroundColor: colors.backgroundColor
		},
		imageModal: {
			width: scaleWidthPX(103),
			height: scaleHeightPX(58),
			backgroundColor: colors.backgroundColor,
			borderRadius: 0
		}
	})
