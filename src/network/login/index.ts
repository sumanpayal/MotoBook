import { API_RESPONSE, TOKEN, USER } from '@src/common/constants/constants';
import { getApiService, postApiService, putApiService } from '../apiService';
import { ADD_DETAIL, GET_USER_PROFILE_DETAILS, MOBILE_LOGIN, UPDATE_PROFILE_DETAILS, VERIFY_OTP } from './endpoints';
import { storeAnonymousData, storeData } from '@src/common/storage/localStorage';

export const postMobileLogin = (
    headers: any,
    params: any,
    callBack: (res: API_RESPONSE) => void,
) => {
    postApiService(MOBILE_LOGIN, params, { headers: headers })
        .then(async (res: any) => {
            if (res?.status === 200) {
                callBack({
                    data: res?.message,
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
                error: err?.message,
            });
        });
};

export const postVerifyOTP = (
    headers: any,
    params: any,
    callBack: (res: API_RESPONSE) => void,
) => {
    postApiService(VERIFY_OTP, params, { headers: headers })
        .then(async (res: any) => {
            if (res?.status === 200) {
                storeAnonymousData(TOKEN, res?.data?.token)
                storeData(USER, res?.data?.user)
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
                error: err?.message,
            });
        });
};


export const postAddDetailsUser = (
    headers: any,
    params: any,
    callBack: (res: API_RESPONSE) => void,
) => {
    postApiService(ADD_DETAIL, params, { headers: headers })
        .then(async (res: any) => {
            if (res?.status === 200) {
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
                error: err?.message,
            });
        });
};

export const getUserProfileDetails = (
    callBack: (res: API_RESPONSE) => void,
) => {
    getApiService(GET_USER_PROFILE_DETAILS)
        .then(async (res: any) => {
            if (res?.status === 200) {
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
                error: err?.message,
            });
        });
};

export const postUpdateUserDetails = (
    headers: any,
    params: any,
    callBack: (res: API_RESPONSE) => void,
) => {
    putApiService(UPDATE_PROFILE_DETAILS, params, { headers: headers })
        .then(async (res: any) => {
            if (res?.status === 200) {
                callBack({
                    data: res?.message,
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
                error: err?.message,
            });
        });
};