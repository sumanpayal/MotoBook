import { API_RESPONSE } from '@src/common/constants/constants'
import { getApiService, postApiService, putApiService } from '../apiService'
import { ADDRESS_LIST, ADD_ADDRESS, COLORS_LIST, UPDATE_ADDRESS } from './endpoints'

export const getAddressListAPI = (callBack: (response: API_RESPONSE) => void) => {
	getApiService(ADDRESS_LIST)
		.then(async (res: any) => {
			if (res?.status === 200) {
				callBack({
					data: res?.data,
					error: undefined
				})
			} else {
				callBack({
					data: undefined,
					error: res?.message
				})
			}
		})
		.catch((err: any) => {
			console.error(err?.message)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const postAddAddressAPI = (params: any, callBack: (response: API_RESPONSE) => void) => {
	postApiService(ADD_ADDRESS, params)
		.then(async (res: any) => {
			if (res?.status === 200) {
				callBack({
					data: res?.message,
					error: undefined
				})
			} else {
				callBack({
					data: undefined,
					error: res?.message
				})
			}
		})
		.catch((err: any) => {
			console.error(err?.message)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const postUpdateAddAddressAPI = (address_id: any, params: any, callBack: (response: API_RESPONSE) => void) => {
	putApiService(UPDATE_ADDRESS(address_id), params)
		.then(async (res: any) => {
			if (res?.status === 200) {
				callBack({
					data: res?.message,
					error: undefined
				})
			} else {
				callBack({
					data: undefined,
					error: res?.message
				})
			}
		})
		.catch((err: any) => {
			console.error(err?.message)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const getColorsList = (callBack: (response: API_RESPONSE) => void) => {
	getApiService(COLORS_LIST)
		.then(async (res: any) => {
			callBack({
				data: res?.data,
				error: undefined
			})
		})
		.catch((err: any) => {
			console.error(err?.message)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}
