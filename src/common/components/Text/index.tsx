import commonFontStyles from '@commonStyles/commonFontStyles'
import { useTheme } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { Text } from 'react-native'
import { ISansTextProps } from './types'

export default function CustomText({ children, textType, style = {}, lineHeight = false, numberOfLines = 0 }: ISansTextProps) {
	const { colors } = useTheme()

	const textStyle = useMemo(() => {
		switch (textType) {
			case 'regular':
				return { ...commonFontStyles.fontRegular, ...commonFontStyles.fontSizeM, color: colors.textColor }
			case 'medium':
				return { ...commonFontStyles.fontMedium, ...commonFontStyles.fontSizeM, color: colors.textColor }
			case 'semi-bold':
				return { ...commonFontStyles.fontSemiBold, ...commonFontStyles.fontSizeM, color: colors.textColor }
			case 'bold':
				return { ...commonFontStyles.fontBold, ...commonFontStyles.fontSizeM, color: colors.textColor }
			default:
				return { ...commonFontStyles.fontRegular, ...commonFontStyles.fontSizeM, color: colors.textColor }
		}
	}, [textType])

	const fontLineHeight = useMemo(() => {
		return lineHeight ? (style?.fontSize ? style?.fontSize * 1.4 : textStyle?.fontSize * 1.4) : undefined
	}, [style, lineHeight, textStyle])

	return (
		<Text numberOfLines={numberOfLines} style={[textStyle, style, { lineHeight: fontLineHeight }]}>
			{children}
		</Text>
	)
}
