import { instance } from '../utils/instance';

//로그인
export const login = async (info) => {
  const { data } = await instance.post('/dj/login/', info);
  const {
    access,
    refresh,
    user: { nickname },
  } = data;

  return { access, refresh, nickname };
};

//로그아웃
export const logout = async () => {
  const { data } = await instance.post('/dj/logout/');
  return data; // X
};

//회원가입
export const registration = async (info) => {
  const { data } = await instance.post('/dj/registration/', info);
  console.log(data);
  return data; // X
};
