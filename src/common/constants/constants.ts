export const TOKEN_DATA = 'tokenData'
export const TOKEN = 'token'
export const REFRESH_TOKEN = 'refreshToken'
export const USER = 'user'
export const USER_NAME = 'userName'
export const APP_USER = 'appUser'

export const DEFAULT_IMAGE_URL = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

export const PHONE_NO = '+91 7300096188'
export const EMAIL_ADDRESS = 'support@motorwash.in'

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
