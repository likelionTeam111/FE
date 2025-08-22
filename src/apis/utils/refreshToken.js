import axios from 'axios';
import { getCookie, setCookie } from './cookie';

//토큰 리프레시 함수
export const tokenRefresh = async () => {
  const refreshToken = getCookie('refreshToken');

  // 재발급 요청
  const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/dj/token/refresh/`, {
    refresh: refreshToken,
  });

  //새로운 토큰 쿠키에 넣기
  const newAccessToken = data.access;
  setCookie('accessToken', newAccessToken);
};
