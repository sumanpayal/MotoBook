import React, { useState, useRef } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import commonFontStyles from '@commonStyles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@utils/responsiveStyle'
import { useTheme } from '@react-navigation/native'

interface CustomOTPProps {
	numInputs?: number
	onChange?: (value: string) => void
}

export default function CustomOTP({ numInputs = 4, onChange }: CustomOTPProps) {
	const [pin, setPin] = useState<string[]>(Array(numInputs).fill('')) // State to hold pin values

	const { colors } = useTheme()
	const styles = Styles(colors)
	const inputRefs = useRef<(TextInput | null)[]>([])

	const handleChange = (value: string, index: number): void => {
		const newPin = [...pin]
		const isDeleting = value === '' && pin[index] !== '' // Detect backspace
		newPin[index] = value.slice(-1) // Allow only one digit per box
		setPin(newPin)

		if (onChange) {
			onChange(newPin.join(''))
		}

		if (value && !isDeleting && index < numInputs - 1) {
			// Move to the next input if adding a character
			inputRefs.current[index + 1]?.focus()
		} else if (isDeleting && index > 0) {
			// Move to the previous input if deleting and the input is empty
			inputRefs.current[index - 1]?.focus()
		}
	}

	const renderInputs = (): JSX.Element[] => pin.map((value, index) => <TextInput key={index} ref={(el) => (inputRefs.current[index] = el)} style={[styles.input, value !== '' && styles.inputFilled]} keyboardType='number-pad' maxLength={1} onChangeText={(text) => handleChange(text, index)} value={value} placeholder='∘' placeholderTextColor={colors.inputPlaceholder} returnKeyType='done' />)

	return <View style={styles.container}>{renderInputs()}</View>
}

const Styles = (colors: any) =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: scaleHeightPX(80),
			width: '100%'
		},
		input: {
			width: scaleWidthPX(80),
			height: scaleWidthPX(80),
			marginHorizontal: scaleWidthPX(4),
			borderRadius: 15,
			backgroundColor: colors.inputBackground,
			borderColor: colors.backgroundColor + '00',
			textAlign: 'center',
			textAlignVertical: 'center',
			...commonFontStyles.fontSemiBold,
			...commonFontStyles.fontSizeXL
		},
		inputFilled: {
			color: colors.white
		}
	})
