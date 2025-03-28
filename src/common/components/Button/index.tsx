import commonFontStyles from '@commonStyles/commonFontStyles'
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

	const { title, onPress, disabled = false, showIcon = false, SVGIcon, backgroundColor, buttonType = BUTTON_TYPES.PRIMARY, width, white = colors.backgroundColor, isLoading = false, iconSize = 24, isFlex = false, isCircleRadius = false } = props

	const buttonStyle: ViewStyle = useMemo(() => {
		switch (buttonType) {
			case BUTTON_TYPES.PRIMARY:
				return {
					backgroundColor: backgroundColor ? backgroundColor : colors.primary,
					height: scaleHeightPX(60),
					width: width ? width : '100%'
				}
			case BUTTON_TYPES.SECONDARY:
				return {
					backgroundColor: backgroundColor ? backgroundColor : colors.white,
					height: scaleHeightPX(60),
					width: width ? width : '100%'
				}
			default:
				return {
					backgroundColor: backgroundColor ? backgroundColor : colors.primary,
					height: scaleHeightPX(60),
					width: width ? width : '100%'
				}
		}
	}, [buttonType, backgroundColor, width])

	const buttonFlexStyle: ViewStyle = useMemo(() => {
		if (isFlex) {
			return { flex: 1 }
		} else {
			return {}
		}
	}, [isFlex])

	const borderStyle = useMemo(() => {
		if (isCircleRadius) {
			return { borderRadius: 100 }
		} else {
			return { borderRadius: 15 }
		}
	}, [isCircleRadius])

	const textStyle: TextStyle = useMemo(() => {
		switch (buttonType) {
			case BUTTON_TYPES.PRIMARY:
				return {
					...commonFontStyles.fontSemiBold,
					...commonFontStyles.fontSizeXL,
					color: white
				}
			case BUTTON_TYPES.SECONDARY:
				return {
					...commonFontStyles.fontSemiBold,
					...commonFontStyles.fontSizeXL,
					color: colors.backgroundColor
				}
			default:
				return {
					...commonFontStyles.fontSemiBold,
					...commonFontStyles.fontSizeXL,
					color: white
				}
		}
	}, [buttonType, white])

	return isLoading ? (
		<View style={[styles.button, buttonStyle, borderStyle]}>
			<LottieView source={ButtonLoader} style={{ width: scaleWidthPX(109), height: scaleHeightPX(32) }} autoPlay loop />
		</View>
	) : (
		<Pressable style={[styles.button, buttonStyle, buttonFlexStyle, borderStyle, { opacity: disabled ? 0.5 : 1 }]} onPress={onPress} disabled={disabled}>
			{showIcon && <SVGIcon />}
			<CustomText style={textStyle}>{title}</CustomText>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		paddingHorizontal: scaleWidthPX(12),
		flexDirection: 'row',
		gap: scaleWidthPX(16)
	}
})
