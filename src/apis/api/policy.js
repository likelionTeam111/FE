import { instance } from '../utils/instance';

//정책 상세 정보
export const detailPolicy = async (id) => {
  const { data } = await instance.get(`/policy/${id}/`);
  return data;
};

//관심정책 목록
export const favoritePolicyList = async () => {
  const { data } = await instance.get('/policy/favorite/list/');
  return data;
};

// 관심정책 추가
export const addFavoritePolicy = async (id) => {
  const { data } = await instance.post(`/policy/favorite/${id}/post/`, {});
  return data;
};

// 관심정책 삭제
export const deleteFavoritePolicy = async (id) => {
  const { data } = await instance.delete(`/policy/favorite/${id}/delete/`, {});
  return data;
};
