import { instance } from '../utils/instance';

// 카테고리별로 추천 정책 요청
export const recommend = async (category) => {
  const { data } = await instance.get(`/profiles/recommend/${category}/`);
  return data; // 정책 리스트
};

// 추천 정책 전체
export const recommendAll = async () => {
  const { data } = await instance.get('/profiles/recommend/');
  return data;
};
