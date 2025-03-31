import '@react-navigation/native'

declare module '@react-navigation/native' {
	export type ExtendedTheme = {
		dark: boolean
		colors: {
			white: string
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
			inputBackground: string
			labelColor: string
			planBg: string
			planText: string,
			inActiveDot: string,
			interiorBg: string,
			headerBg: string,
			carInner: string,
			carBottom: string,
			carDetailBg: string,
			carDetailsBgTop: string
		}
	}
	export function useTheme(): ExtendedTheme
}
