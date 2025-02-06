import {API_RESPONSE} from '@src/common/constants/constants';
import {getApiService, postApiService} from '../apiService';
import {API_NAME} from './endpoints';

/**
 * Make a GET request to the specified API.
 *
 * @param payload - The headers to be sent with the request.
 * @param callBack - The callback function that will be called with the API response.
 *    The callback function should accept a single parameter of type {@link API_RESPONSE}.
 */
export const getAPICallSample = (
  payload: any,
  callBack: (response: API_RESPONSE) => void,
) => {
  getApiService(API_NAME, {headers: payload})
    .then(async (res: any) => {
      if (res?.success === 'true' || res?.success === true) {
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

/**
 * Make a POST request to the specified API.
 *
 * @param payload - The payload to be sent in the request body.
 * @param params - The Axios request config.
 * @param callBack - The callback function that will be called with the API response.
 *    The callback function should accept a single parameter of type {@link API_RESPONSE}.
 */
export const postAPICallSample = (
  payload: any,
  params: any,
  callBack: (res: API_RESPONSE) => void,
) => {
  postApiService(API_NAME, params, {headers: payload})
    .then(async (res: any) => {
      if (res?.success === 'true' || res?.success === true) {
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
