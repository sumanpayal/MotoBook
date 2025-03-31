export const TOKEN_DATA = 'tokenData'
export const TOKEN = 'token'
export const REFRESH_TOKEN = 'refreshToken'
export const USER = 'user'
export const USER_NAME = 'userName'
export const APP_USER = 'appUser'

export enum BUTTON_TYPES {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

export enum ENVIRONMENT {
	DEV = 'DEV',
	QA = 'QA',
	UAT = 'UAT',
	PROD = 'PROD'
}

export type API_RESPONSE = {
	data: any
	error: any
}
