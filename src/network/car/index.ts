import { API_RESPONSE } from '@src/common/constants/constants'
import { getApiService, postApiService } from '../apiService'
import { GET_CAR_MODALS, GET_COMPANIES, POST_VEHICLE_DETAILS } from './endpoints'

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
				error: err
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
				error: err
			})
		})
}

export const postVehicleDetailsAPI = (params: any, callBack: (response: API_RESPONSE) => void) => {
	postApiService(POST_VEHICLE_DETAILS, params)
		.then(async (res: any) => {
            console.log(res);
            
            callBack({
                data: res?.message,
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
