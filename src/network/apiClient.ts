import { CONFIG } from '@constants/config';
import { ENVIRONMENT, TOKEN } from '@src/common/constants/constants';
import { getAnonymousStoreData } from '@src/common/storage/localStorage';
import axios from 'axios';

export const ENV = ENVIRONMENT.DEV;

const getToken = async () => {
  const data = await getAnonymousStoreData(TOKEN)
  return data;
};

const APIClient = axios.create({
  baseURL: CONFIG[`${ENV}`]?.baseUrl,
});

const getAuthURLs = (config: any) => {
  return config?.url?.indexOf('/auth/mobile-login') === -1 || config?.url?.indexOf('/auth/verify-otp') === -1 || config?.url?.indexOf('/car-models/company') === -1 || config?.url?.indexOf('/companies') === -1
}

APIClient.interceptors.request.use(
  async config => {
    if (getAuthURLs(config)) {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default APIClient;
