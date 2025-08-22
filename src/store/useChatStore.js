import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useChatStore = create(
  persist(
    (set) => ({
      threadId: null,
      random: 1,

      resetChat: () => set({ threadId: null, random: 1 }),
      setRandom: (value) => set({ random: value }),
      setThread_id: (value) => set({ threadId: value }),
    }),
    {
      name: 'chat',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
