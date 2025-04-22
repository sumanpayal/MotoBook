import { DefaultTheme, ExtendedTheme } from '@react-navigation/native'

enum COLOR_SCHEME {
	LIGHT = 'light',
	DARK = 'dark'
}

const COLORS_LIGHT: ExtendedTheme = {
	...DefaultTheme,
	dark: false,
	colors: {
		white: '#FFFFFF',
		backgroundColor: '#10192A',
		primary: '#00E39C',
		secondary: 'rgb(9,56,114)',
		grayBg: 'rgb(26,26,24)',
		alertRed: '#DB5757',
		alertGreen: '#19AC56',
		black: '#000000',
		borderColor: '#1B2F44',
		borderColorInputFocused: '#333333',
		borderColorInputDisabled: '#8596B8',
		inputPlaceholder: '#555F71',
		searchBackground: '#F0F2F6',
		uploadFileSuccessBg: '#F3FFFA',
		otpBackground: '#000C2ACC',
		inputDisabledBackground: '#DFE6F4',
		warning: '#FFEA6A',
		shadowColor: '#1A2A61',
		inputBackground: '#1B3044',
		labelColor: '#9BA6B8',
		planBg: '#A5D5FA',
		planText: '#2D4B82',
		inActiveDot: '#A7A7A7',
		interiorBg: '#00585B',
		headerBg: '#0D2339',
		carInner: '#1F355F',
		carBottom: '#465A82',
		carDetailBg: '#1A2D41',
		carDetailsBgTop: '#162F48',
		registrationBg: '#010C22',
		buttonText: '#444444',
		carBg: '#060B10',
		noVehicleCardBg: '#89D8FF',
		requestSubmittedCardBg: '#A899FF',
		subscriptionExpiredCardBg: '#EDD6C4',
		referAFirendCardBg: '#A999FF',
		transparentCardBg: '#FF887C',
		fullMonthServiceCardBg: '#83C3FF'
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
