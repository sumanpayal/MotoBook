import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonShadowStyles from '@src/common/styles/commonShadowStyles'
import CustomText from '@src/common/components/Text'

const BrandItem = (props: { onPress: () => void; item: any }) => {
	const { onPress, item } = props
	const { colors } = useTheme()
	const styles = selectionModalStyles(colors)
	return (
		<Pressable onPress={onPress} style={[styles.item, commonShadowStyles(colors.shadowColor).cardShodowStyle]}>
			<CustomText>{item?.title}</CustomText>
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
			height: scaleHeightPX(90),
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			...commonPaddingStyles.paddingM,
			...commonMarginStyles.marginBottomM
		}
	})
