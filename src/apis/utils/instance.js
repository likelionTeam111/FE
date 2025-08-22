import axios from 'axios';
import { getCookie } from './cookie';
import { tokenRefresh } from './refreshToken';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 토큰 자동 재발급
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    //인증 문제
    if (error.response?.status === 401) {
      await tokenRefresh(); // 재발급 요청
      const accessToken = getCookie('accessToken');
      error.config.headers.Authorization = `Bearer ${accessToken}`;
      return instance(error.config);
    } else if (error.response?.status === 404) {
      window.location.href = '/notFound';
      return Promise.reject(error);
    } else if (error.response?.status === 403) {
      window.location.href = '/forbidden';
      return Promise.reject(error);
    } else if (error.response?.status === 500) {
      window.location.href = '/serverError';
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
