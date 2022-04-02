import axios from "axios";

import {authHandler} from '../services/authHandler'

const baseURL = "https://aula-dev-eywuxfj2b-luiznola.vercel.app/api";

export const apiClient = axios.create({
  baseURL
});

apiClient.interceptors.request.use((config) => {
  const nConfig = { ...config };
  const accessToken = authHandler.getToken();
  if (accessToken) {
    nConfig.headers!.Authorization = accessToken
  }
  return nConfig;
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const path = window.location.pathname;
    const status = error.status ? error.response.status : null;
    if (error && path !== '/login' && status === 401) {
      authHandler.doLogout();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);