import { KeyboardType, TextInputProps, ViewStyle } from 'react-native'

interface CustomInputProps {
	viewStyle?: ViewStyle
	inputStyle?: TextInputProps
	value: string
	onFocus?: () => void
	onBlur?: () => void
	onChangeText: (text: string) => void
	inputRef?: any
	label: string
	editable?: boolean
	isRequired?: boolean
	secureTextEntry?: boolean
	isMultiline?: boolean
	isRightIcon?: boolean
	keyboardType?: KeyboardType
	maxLength?: number
	iconName?: any
}
