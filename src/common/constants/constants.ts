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

export const colorsList = [
	{
		id: 0,
		name: 'White',
		color: '#FFFFFF',
		description: 'The most popular choice for its heat‐reflecting, spacious look and resale value.'
	},
	{
		id: 1,
		name: 'Silver',
		color: '#C0C0C0',
		description: 'Favored for its elegant appeal and ability to hide dust.'
	},
	{
		id: 2,
		name: 'Grey',
		color: '#808080',
		description: 'Valued for its subtle style and lower maintenance.'
	},
	{
		id: 3,
		name: 'Blue',
		color: '#0000FF',
		description: 'Chosen for its youthful, standout vibe without being too flashy.'
	},
	{
		id: 4,
		name: 'Red',
		color: '#FF0000',
		description: 'A dynamic, energetic hue often seen on hatchbacks and sporty models.'
	},
	{
		id: 5,
		name: 'Beige',
		color: '#F5F5DC',
		description: 'Once very popular, this neutral “natural” shade still has its devotees.'
	},
	{
		id: 6,
		name: 'Black',
		color: '#000000',
		description: 'Classic yet challenging to maintain, preferred by many for its premium look.'
	},
	{
		id: 7,
		name: 'Brown',
		color: '#8B4513',
		description: 'Associated with larger sedans/SUVs for its warm, natural feel.'
	},
	{
		id: 8,
		name: 'Green',
		color: '#006400',
		description: 'Darker greens are slowly gaining traction, especially among SUV buyers.'
	},
	{
		id: 9,
		name: 'Purple',
		color: '#800080',
		description: 'A unique, majestic color chosen by those seeking something different.'
	},
	{
		id: 10,
		name: 'Gold',
		color: '#FFD700',
		description: 'Often seen as a premium option on certain models, adding a touch of luxury.'
	},
	{
		id: 11,
		name: 'Orange',
		color: '#FFA500',
		description: 'A vibrant option—particularly on SUVs and hatchbacks—that stands out on the road.'
	},
	{
		id: 12,
		name: 'Yellow',
		color: '#FFFF00',
		description: 'A bright, attention-grabbing shade that also helps hide minor dirt.'
	},
	{
		id: 13,
		name: 'Burgundy',
		color: '#800020',
		description: 'A deep, rich variant of red popular on select sedans and luxury vehicles.'
	},
	{
		id: 14,
		name: 'Champagne',
		color: '#F7E7CE',
		description: 'A soft, light gold‐inspired tone offering a refined alternative to beige.'
	},
	{
		id: 15,
		name: 'Others',
		color: '',
		description: ''
	}
]
