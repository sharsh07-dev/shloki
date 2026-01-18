import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark', // Default is dark
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        
        // Update the actual HTML class
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        return { theme: newTheme };
      }),
      
      // Initialize theme on app load
      initTheme: () => {
        const storage = JSON.parse(localStorage.getItem('shloki-theme'));
        const savedTheme = storage?.state?.theme || 'dark';
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }),
    {
      name: 'shloki-theme',
    }
  )
);

export default useThemeStore;