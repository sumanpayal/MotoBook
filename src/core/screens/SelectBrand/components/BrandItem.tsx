import { Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { vhicleImage } from '..'
import commonShadowStyles from '@src/common/styles/commonShadowStyles'

interface BrandItemProps { onPress: () => void; item: any }

const BrandItem = (props: BrandItemProps) => {
	const { onPress, item } = props
	const { colors } = useTheme()
	const styles = selectionModalStyles(colors)
	return (
		<Pressable onPress={onPress} style={[styles.item, commonShadowStyles(colors.backgroundColor).cardShodowStyle]}>
			<Image source={{ uri: vhicleImage }} style={styles.image} />
			<CustomText numberOfLines={1} style={{ ...commonFontStyles.fontSizeS, textAlign: 'center' }}>{item?.name}</CustomText>
		</Pressable>
	)
}

export default BrandItem

const selectionModalStyles = (colors: any) =>
	StyleSheet.create({
		item: {
			...commonBorderRadiusStyles.borderRadiusS,
			...commonBorderWidthStyles.borderWidthM,
			borderColor: colors.inputPlaceholder,
			width: scaleWidthPX(80),
			height: scaleWidthPX(80),
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			...commonPaddingStyles.paddingHorizontal6XS,
			...commonPaddingStyles.paddingVerticalM,
			gap: scaleHeightPX(8)
		},
		image: {
			width: scaleWidthPX(50),
			height: scaleHeightPX(40),
			...commonBorderRadiusStyles.borderRadiusS,
			...commonBorderWidthStyles.borderWidthM,
			borderColor: colors.inputPlaceholder
		}
	})
