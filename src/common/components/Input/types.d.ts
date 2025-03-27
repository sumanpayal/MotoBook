import { KeyboardType, ViewStyle } from 'react-native'

interface CustomInputProps {
	viewStyle?: ViewStyle
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
	RightIcon?: any
	rightIconOnPress?: () => void
	handleFocus?: any
	handleBlur?: any
	isLeftChildren?: boolean
	placeholder?: string
	leftChildren?: any
}
