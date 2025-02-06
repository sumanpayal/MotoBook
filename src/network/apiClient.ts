import {CONFIG} from '@constants/config';
import { ENVIRONMENT } from '@src/common/constants/constants';
import axios from 'axios';

export const ENV = ENVIRONMENT.DEV;

const getToken = async () => {
  return 'generate-new-token-here';
};

const APIClient = axios.create({
  baseURL: CONFIG?.ENV?.phoenix.baseUrl,
});

APIClient.interceptors.request.use(
  async config => {
    if (config?.url !== '/token') {
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
