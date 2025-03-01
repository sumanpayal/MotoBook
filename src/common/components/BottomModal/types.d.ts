import { TextStyle, ViewStyle } from 'react-native'

interface BottomModalProps {
	children?: React.ReactNode | undefined
	visible?: boolean
	onDrop?: () => void
	onModalHide?: () => void
	containerStyle?: ViewStyle
	headerTitle?: string
	headerCloseOnPress?: () => void
	hideOnBackdropPress?: boolean
	isHeader?: boolean
	subHeaderTitle?: string
	isLeftIcon?: boolean
	headerLeftOnPress?: () => void
}
