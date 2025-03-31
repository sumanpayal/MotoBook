import commonFontStyles from '@commonStyles/commonFontStyles'
import { useTheme } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { Text } from 'react-native'
import { ISansTextProps } from './types'

export default function CustomText({ children, textType, style = {}, lineHeight = false, numberOfLines = 0, onPress }: ISansTextProps) {
	const { colors } = useTheme()

	const textStyle = useMemo(() => {
		switch (textType) {
			case 'regular':
				return { ...commonFontStyles.fontRegular, ...commonFontStyles.fontSizeM, color: colors.white }
			case 'medium':
				return { ...commonFontStyles.fontMedium, ...commonFontStyles.fontSizeM, color: colors.white }
			case 'semi-bold':
				return { ...commonFontStyles.fontSemiBold, ...commonFontStyles.fontSizeM, color: colors.white }
			case 'bold':
				return { ...commonFontStyles.fontBold, ...commonFontStyles.fontSizeM, color: colors.white }
			default:
				return { ...commonFontStyles.fontRegular, ...commonFontStyles.fontSizeM, color: colors.white }
		}
	}, [textType])

	const fontLineHeight = useMemo(() => {
		return lineHeight ? (style?.fontSize ? style?.fontSize * 1.4 : textStyle?.fontSize * 1.4) : undefined
	}, [style, lineHeight, textStyle])

	return (
		<Text disabled={onPress ? false : true} onPress={() => onPress && onPress()} numberOfLines={numberOfLines} style={[textStyle, style, { lineHeight: fontLineHeight }]}>
			{children}
		</Text>
	)
}
