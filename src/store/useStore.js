import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // State
      unlockedCards: ['gita-1', 'yogasutra-1', 'upanishads-1'], // Give first card free
      adCredits: 0,
      
      // Actions
      unlockCard: (cardId) => set((state) => {
        if (state.unlockedCards.includes(cardId)) return state;
        return { unlockedCards: [...state.unlockedCards, cardId] };
      }),

      isUnlocked: (cardId) => {
        return get().unlockedCards.includes(cardId);
      },

      // Mock Ad Service (3 seconds duration)
      watchAd: () => new Promise((resolve) => {
        console.log("Ad started...");
        setTimeout(() => {
          console.log("Ad finished!");
          resolve(true);
        }, 3000); 
      }),

      // UI State
      isFeedbackOpen: false,
      toggleFeedback: () => set((state) => ({ isFeedbackOpen: !state.isFeedbackOpen })),
    }),
    {
      name: 'shloki-storage', 
    }
  )
);

export default useStore;