import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialInfo = {
  age: null,
  region: null,
  marry: null,
  min_income: null,
  max_income: null,
  graduate: null,
  employment: null,
  major: [],
  special: [],
  goal: null,
};

export const useInfoStore = create(
  persist(
    (set) => ({
      info: initialInfo,
      setInfo: (key, value) => {
        set((state) => {
          const next = { ...state.info, [key]: value };
          console.log(`[setInfo] ${key} →`, value, next);
          return { info: next };
        });
      },
      myInfo: (value) => set({ info: value }),
      resetInfo: () => set({ info: initialInfo }),
    }),
    {
      name: 'onboarding-info', // localStorage에 저장될 키 이름
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ info: state.info }), // info 객체만 저장
    }
  )
);

/*
set((state) => ({ info: { ...state.info, [key]: value } }));
*/

/*
관심지역 -> region 
나이 -> age
혼인여부 -> marry
연소득 max , min
학력 -> graduate
취업상태 -> employment
전공 분야 (배열) -> major
특화 분야 (배열) -> special
할 말 -> goal
*/
