import commonAlignStyles from '@commonStyles/commonAlignStyles'
import commonBorderRadiusStyles from '@commonStyles/commonBorderRadiusStyles'
import commonFlexStyles from '@commonStyles/commonFlexStyles'
import commonFontStyles from '@commonStyles/commonFontStyles'
import commonPaddingStyles from '@commonStyles/commonPaddingStyles'
import { spacing } from '@commonStyles/values'
import CustomText from '@components/Text'
import { BUTTON_TYPES } from '@constants/constants'
import { useTheme } from '@react-navigation/native'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import LottieView from 'lottie-react-native'
import React, { useMemo } from 'react'
import { Pressable, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { CustomButtonProps } from './types'
import { ButtonLoader } from '@src/assets/lottie'

export default function CustomButton(props: CustomButtonProps) {
	const { colors } = useTheme()

	const { title, onPress, disabled = false, showIcon = false, SVGIcon, backgroundColor, buttonType = BUTTON_TYPES.PRIMARY, width, textColor = colors.textColor, isLoading = false, isHorizontal = false, iconSize = 16, isFlex = false } = props

	const buttonStyle: ViewStyle = useMemo(() => {
		switch (buttonType) {
			case BUTTON_TYPES.PRIMARY:
				return {
					backgroundColor: backgroundColor ? backgroundColor : colors.primary,
					height: scaleHeightPX(isHorizontal ? 48 : 60),
					width: width ? width : '100%'
				}
			case BUTTON_TYPES.SECONDARY:
				return {
					backgroundColor: backgroundColor ? backgroundColor : colors.textColor,
					height: scaleHeightPX(isHorizontal ? 48 : 60),
					width: width ? width : '100%'
				}
			default:
				return {
					backgroundColor: backgroundColor ? backgroundColor : colors.primary,
					height: scaleHeightPX(isHorizontal ? 48 : 60),
					width: width ? width : '100%'
				}
		}
	}, [buttonType, backgroundColor, width])

	const buttonFlexStyle: ViewStyle = useMemo(() => {
		if (isFlex) {
			return commonFlexStyles.flex1
		} else {
			return {}
		}
	}, [isFlex])

	const textStyle: TextStyle = useMemo(() => {
		switch (buttonType) {
			case BUTTON_TYPES.PRIMARY:
				return {
					...commonFontStyles.fontSemiBold,
					...commonFontStyles.fontSizeL,
					color: textColor
				}
			case BUTTON_TYPES.SECONDARY:
				return {
					...commonFontStyles.fontSemiBold,
					...commonFontStyles.fontSizeL,
					color: colors.backgroundColor
				}
			default:
				return {
					...commonFontStyles.fontSemiBold,
					...commonFontStyles.fontSizeL,
					color: textColor
				}
		}
	}, [buttonType, textColor])

	return isLoading ? (
		<View style={[styles.button, buttonStyle]}>
			<LottieView source={ButtonLoader} style={{ width: scaleWidthPX(109), height: scaleHeightPX(32) }} autoPlay loop />
		</View>
	) : (
		<Pressable style={[styles.button, buttonStyle, buttonFlexStyle, { opacity: disabled ? 0.5 : 1 }]} onPress={onPress} disabled={disabled}>
			{showIcon && <SVGIcon width={scaleWidthPX(iconSize)} height={scaleWidthPX(iconSize)} />}
			<CustomText style={textStyle}>{title}</CustomText>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		...commonAlignStyles.alignCenter,
		...commonAlignStyles.justifyCenter,
		...commonBorderRadiusStyles.borderRadiusCircle,
		...commonPaddingStyles.paddingHorizontalXS,
		...commonFlexStyles.flexRow,
		gap: scaleWidthPX(spacing.m)
	}
})
