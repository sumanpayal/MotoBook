import { TextStyle } from 'react-native'

interface ISansTextProps {
	children?: React.ReactNode | undefined
	textType?: 'regular' | 'medium' | 'semi-bold' | 'bold'
	style?: TextStyle
	lineHeight?: boolean
	numberOfLines?: number
}
