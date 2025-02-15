import { API_RESPONSE } from '@src/common/constants/constants';
import { getApiService } from '../apiService';
import { GET_CAR_MODALS, GET_COMPANIES } from './endpoints';

export const getCompaniesListAPI = (
    callBack: (response: API_RESPONSE) => void,
) => {
    getApiService(GET_COMPANIES)
        .then(async (res: any) => {
        if (res?.status === 200 || res?.status === '200') {
                callBack({
                    data: res?.data,
                    error: undefined,
                });
            } else {
                callBack({
                    data: undefined,
                    error: res?.message,
                });
            }
        })
        .catch((err: any) => {
            console.error(err);
            callBack({
                data: undefined,
                error: err,
            });
        });
};

export const getCarModalsListAPIForCompanyID = (
    company_id: any,
    callBack: (response: API_RESPONSE) => void,
) => {
    getApiService(GET_CAR_MODALS(company_id))
        .then(async (res: any) => {
        if (res?.status === 200 || res?.status === '200') {
                callBack({
                    data: res?.data,
                    error: undefined,
                });
            } else {
                callBack({
                    data: undefined,
                    error: res?.message,
                });
            }
        })
        .catch((err: any) => {
            console.error(err);
            callBack({
                data: undefined,
                error: err,
            });
        });
};