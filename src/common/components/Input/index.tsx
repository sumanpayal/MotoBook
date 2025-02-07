import React, { useEffect, useRef, useState } from 'react'
import { Animated, TextInput, View } from 'react-native'
import { CustomInputProps } from './types'
import { scaleFontSize, scaleHeightPX } from '@utils/responsiveStyle'
import commonFontStyles from '@commonStyles/commonFontStyles'
import { inputStyles } from './styles'
import { useTheme } from '@react-navigation/native'
import { fontSize } from '@commonStyles/values'
import commonFlexStyles from '@commonStyles/commonFlexStyles'
import Icon from 'react-native-vector-icons/AntDesign'

export default function CustomInput(props: CustomInputProps) {
	const { colors } = useTheme()

	const { viewStyle = {}, value = '', onFocus, onBlur, onChangeText, inputRef, label, inputStyle = {}, editable = true, isRequired = false, secureTextEntry = false, isMultiline = false, isRightIcon = false, keyboardType = 'default', maxLength = 100, iconName = 'down' } = props

	const styles = inputStyles(colors)

	const [text, setText] = useState('')
	const [isFocused, setFocus] = useState(false)
	const floatingLabelAnimation = useRef(new Animated.Value(value ? 1 : 0)).current

	useEffect(() => {
		if (!isFocused) {
			setText(value)
			handleAnimation(value?.length !== 0 ? 1 : 0)
		}
	}, [value])

	const handleAnimation = (value: number) => {
		// Animate the label up and reduce its size when input is focus
		Animated.timing(floatingLabelAnimation, {
			toValue: value,
			duration: 150,
			useNativeDriver: false
		}).start()
	}

	const handleFocus = () => {
		// Animate the label up and reduce its size when input is focus
		Animated.timing(floatingLabelAnimation, {
			toValue: 1,
			duration: 150,
			useNativeDriver: false
		}).start()
		setFocus(true)
		if (onFocus) onFocus()
	}

	const handleBlur = () => {
		// If the input is empty, animate the floating label back to its original position
		if (!text) {
			Animated.timing(floatingLabelAnimation, {
				toValue: 0,
				duration: 150,
				useNativeDriver: false
			}).start()
		}
		setFocus(false)
		if (onBlur) onBlur()
	}

	// Define animated styles for the floating label
	const floatingLabelStyle = {
		top: floatingLabelAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [isMultiline ? scaleHeightPX(12) : scaleHeightPX(22), scaleHeightPX(8)]
		}),
		fontSize: floatingLabelAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [scaleFontSize(fontSize.l), scaleFontSize(fontSize.xs)]
		}),
		color: floatingLabelAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [colors.textColor, colors.inputPlaceholder]
		})
	}

	const floatingLabelStyleRequired = {
		top: floatingLabelAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [isMultiline ? scaleHeightPX(12) : scaleHeightPX(22), scaleHeightPX(8)]
		}),
		fontSize: floatingLabelAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [scaleFontSize(fontSize.l), scaleFontSize(fontSize.xs)]
		}),
		color: floatingLabelAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [colors.alertRed, colors.alertRed]
		})
	}

	const handleOnChangeText = (val: string) => {
		setText(val)
		if (inputRef != null) inputRef!.current!.context = val
		onChangeText(val)
	}

	return (
		<View style={[styles.container, isMultiline && styles.containerMultiline, viewStyle]}>
			<View style={commonFlexStyles.flex1}>
				<Animated.Text style={[commonFontStyles.fontRegular, floatingLabelStyle]}>
					{label}
					{isRequired ? <Animated.Text style={[commonFontStyles.fontRegular, floatingLabelStyleRequired]}>{' *'}</Animated.Text> : ''}
				</Animated.Text>
				<View style={styles.inputView}>
					<TextInput ref={inputRef} style={[styles.input, isMultiline && styles.inputMultiline, inputStyle]} value={text} placeholderTextColor={colors.inputPlaceholder} onChangeText={handleOnChangeText} onFocus={handleFocus} onBlur={handleBlur} editable={editable} secureTextEntry={secureTextEntry} multiline={isMultiline} keyboardType={keyboardType} maxLength={maxLength} pointerEvents={editable ? 'auto' : 'none'} />
				</View>
			</View>
			{isRightIcon && <Icon name={iconName} size={22} color={colors.textColor} />}
		</View>
	)
}
