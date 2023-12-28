import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getAuth,  getToken} from './auth';

interface Error {
  message: string[];
  statusCode: number;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI,
});


axiosInstance.interceptors.request.use(
  function (requestConfig: InternalAxiosRequestConfig) {
    if (getAuth()) requestConfig.headers.set('Authorization', `Bearer ${getToken()}`);
    return requestConfig;
  },
  function (error: AxiosError<Error>) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (responseConfig: AxiosResponse) {
    return responseConfig;
  },

  async function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export const doGet = async (url: string, config = {}) => await axiosInstance.get(url, { ...config });

export const doPost = async (url: string, config = {}, data = {}) => await axiosInstance.post(url, data, { ...config });

export const doPut = async (url: string, config = {}, data = {}) => await axiosInstance.put(url, data, { ...config });

export const doDelete = async (url: string, config = {}) => await axiosInstance.delete(url, { ...config });
