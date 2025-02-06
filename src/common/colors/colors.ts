import { DefaultTheme, ExtendedTheme } from '@react-navigation/native'

enum COLOR_SCHEME {
	LIGHT = 'light',
	DARK = 'dark'
}

const COLORS_LIGHT: ExtendedTheme = {
	...DefaultTheme,
	dark: false,
	colors: {
		textColor: '#FFFFFF',
		backgroundColor: 'rgb(4,4,4)',
		primary: 'rgb(72,190,192)',
		secondary: 'rgb(9,56,114)',
		grayBg: 'rgb(26,26,24)',
		alertRed: '#FF3759',
		alertGreen: '#19AC56',
		black: '#000000',
		borderColor: '#B9C6DE',
		borderColorInputFocused: '#333333',
		borderColorInputDisabled: '#8596B8',
		inputPlaceholder: '#63606D',
		searchBackground: '#F0F2F6',
		uploadFileSuccessBg: '#F3FFFA',
		otpBackground: '#000C2ACC',
		inputDisabledBackground: '#DFE6F4',
		warning: '#FFEA6A',
		shadowColor: '#1A2A61'
	}
}

const COLORS_DARK: ExtendedTheme = {
	...DefaultTheme,
	dark: true,
	colors: COLORS_LIGHT.colors
}

export const COLORS = {
	[COLOR_SCHEME.LIGHT]: COLORS_LIGHT,
	[COLOR_SCHEME.DARK]: COLORS_DARK
}
