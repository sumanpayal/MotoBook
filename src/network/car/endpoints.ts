export const GET_COMPANIES = '/companies'

export const GET_CAR_MODALS = (company_id: any) => `/car-models/company/${company_id}`

export const CAR_MODALS = (car_modal_id: any) => `/car-models/${car_modal_id}`

export const MY_SUBSCRIPTION_LIST = (pageNo: number, perPage: number = 50) => `/subscription/list?page=${pageNo}&perPage=${perPage}`

export const MY_SUBSCRIPTION_DETAILS = (subscription_id: any) => `/subscription/detail?subscription_id=${subscription_id}`

export const SUBSCRIPTION_PLANS = (car_type_id: any) => `/subscription-plans?car_type_id=${car_type_id}`

export const SUBSCRIPTION_TIME_SLOTS = '/subscription/time-slots'

export const POST_SUBSCRIPTION_DETAILS = '/auth/add-car-detail'
