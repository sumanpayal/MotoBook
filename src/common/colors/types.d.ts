import '@react-navigation/native'

declare module '@react-navigation/native' {
	export type ExtendedTheme = {
		dark: boolean
		colors: {
			textColor: string
			backgroundColor: string
			primary: string
			secondary: string
			grayBg: string
			alertRed: string
			alertGreen: string
			black: string
			borderColor: string
			borderColorInputFocused: string
			borderColorInputDisabled: string
			inputPlaceholder: string
			searchBackground: string
			uploadFileSuccessBg: string
			otpBackground: string
			inputDisabledBackground: string
			warning: string
			shadowColor: string
		}
	}
	export function useTheme(): ExtendedTheme
}
