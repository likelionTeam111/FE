import { instance } from '../utils/instance';

export const enroll = async (info) => {
  const { data } = await instance.post('/profiles/enroll/', info);
  return data;
};
export const enrollPatch = async (info) => {
  const { data } = await instance.patch('/profiles/enroll/', info);
  return data;
};

export const myPage = async () => {
  const { data } = await instance.get('/profiles/mypage/');
  return data;
};