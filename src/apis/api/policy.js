import { instance } from '../utils/instance';

//정책 상세 정보
export const detailPolicy = async (id) => {
  const { data } = await instance.get(`/policy/info/${id}/`);
  return data;
};

//관심정책 목록
export const favoritePolicyList = async () => {
  const { data } = await instance.get('/policy/favorite/list/');
  return data;
};

// 관심정책 추가
export const addFavoritePolicy = async (id) => {
  const { status } = await instance.post(`/policy/favorite/${id}/post/`, {});
  return status;
};

// 관심정책 삭제
export const deleteFavoritePolicy = async (id) => {
  const { status } = await instance.delete(`/policy/favorite/${id}/delete/`, {});
  return status;
};

// 정책 검색
export const searchPolicy = async (plcyNm, page) => {
  //TODO 나중에 이렇게 파라미터에 넣는 방법 알아보기
  const { data } = await instance.get('/policy/search', {
    params: { plcyNm, page },
  });
  return data; // { count, next, previous, results }
};
