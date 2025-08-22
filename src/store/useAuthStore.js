import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { setCookie, removeCookie } from '../apis/utils/cookie';

export const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      access: null,
      refresh: null,
      nickname: null,

      //로그인 세팅
      applyLogin: (access, refresh, nickname) => {
        setCookie('accessToken', access);
        setCookie('refreshToken', refresh);

        set({ isLogin: true, access, refresh, nickname });
      },

      //로그아웃 세팅
      clearLogout: () => {
        removeCookie('accessToken');
        removeCookie('refreshToken');
        set({ isLogin: false, access: null, refresh: null, nickname: null });
      },
    }),
    {
      name: 'loginStatus',
      storage: createJSONStorage(() => sessionStorage),
      //로그인 체크, 닉네임만 저장
      partialize: (s) => ({ isLogin: s.isLogin, nickname: s.nickname }),
    }
  )
);
