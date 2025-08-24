import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useChatStore = create(
  persist(
    (set) => ({
      threadId: null,
      messages: [],
      selectedPolicy: null,

      resetChat: () => set({ threadId: null, messages: [], selectedPolicy: null }),
      setThread_id: (value) => set({ threadId: value }),
      setMessages: (value) => set({ messages: value }),
      settingPolicy: (value) => set({ threadId: null, messages: [], selectedPolicy: value }),
    }),
    {
      name: 'chat',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
