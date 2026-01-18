import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useReviewStore = create(
  persist(
    (set, get) => ({
      // Data Structure: { 'gita': [ {id, user, rating, text, date} ], 'yogasutra': [] }
      reviews: {
        'gita': [
          { id: 1, user: 'Arjun K.', rating: 5, text: 'Life changing wisdom. The flashcards make it so easy to digest.', date: '2 days ago' },
          { id: 2, user: 'Sarah M.', rating: 4, text: 'Beautiful design, but I wish there were more audio features.', date: '1 week ago' }
        ],
        'yogasutra': [
           { id: 1, user: 'Dev P.', rating: 5, text: 'Perfect for my morning meditation routine.', date: 'Yesterday' }
        ]
      },

      // Action to add a review
      addReview: (bookId, reviewData) => set((state) => {
        const currentReviews = state.reviews[bookId] || [];
        const newReview = {
          id: Date.now(),
          date: 'Just now',
          ...reviewData
        };
        
        return {
          reviews: {
            ...state.reviews,
            [bookId]: [newReview, ...currentReviews] // Add new review to top
          }
        };
      }),

      // Helper to get average rating
      getStats: (bookId) => {
        const list = get().reviews[bookId] || [];
        if (list.length === 0) return { avg: 0, count: 0 };
        const sum = list.reduce((acc, curr) => acc + curr.rating, 0);
        return { avg: (sum / list.length).toFixed(1), count: list.length };
      }
    }),
    {
      name: 'shloki-reviews',
    }
  )
);

export default useReviewStore;