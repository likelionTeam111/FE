import { instance } from '../utils/instance';

export const enroll = async (info) => {
  const { data } = await instance.post('/profiles/enroll/', info);
  console.log(data); // 온보딩 로깅
  return data;
};
