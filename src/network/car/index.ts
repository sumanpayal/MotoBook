import { API_RESPONSE } from '@src/common/constants/constants'
import { getApiService, postApiService } from '../apiService'
import { GET_CAR_MODALS, GET_COMPANIES, MY_SUBSCRIPTION_LIST, MY_SUBSCRIPTION_DETAILS, SUBSCRIPTION_PLANS, SUBSCRIPTION_TIME_SLOTS, POST_SUBSCRIPTION_DETAILS } from './endpoints'

export const getCompaniesListAPI = (callBack: (response: API_RESPONSE) => void) => {
	getApiService(GET_COMPANIES)
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
			console.error(err)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const getCarModalsListAPIForCompanyID = (company_id: any, callBack: (response: API_RESPONSE) => void) => {
	getApiService(GET_CAR_MODALS(company_id))
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
			console.error(err)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const getMySubscriptionList = (pageNo: number, callBack: (response: API_RESPONSE) => void) => {
	getApiService(MY_SUBSCRIPTION_LIST(pageNo))
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
			console.error(err)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const getMySubscriptionDetails = (subscription_id: number, callBack: (response: API_RESPONSE) => void) => {
	getApiService(MY_SUBSCRIPTION_DETAILS(subscription_id))
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
			console.error(err)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const getSubscriptionPlansList = (car_type_id: number, callBack: (response: API_RESPONSE) => void) => {
	getApiService(SUBSCRIPTION_PLANS(car_type_id))
		.then(async (res: any) => {
			callBack({
				data: res,
				error: undefined
			})
		})
		.catch((err: any) => {
			console.error(err)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const getSubscriptionTimeSlotsList = (callBack: (response: API_RESPONSE) => void) => {
	getApiService(SUBSCRIPTION_TIME_SLOTS)
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
			console.error(err)
			callBack({
				data: undefined,
				error: err?.message
			})
		})
}

export const postSubscriptionDetailsAPI = (params: any, callBack: (response: API_RESPONSE) => void) => {
	postApiService(POST_SUBSCRIPTION_DETAILS, params)
		.then(async (res: any) => {
			if (res.status === 200) {
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
