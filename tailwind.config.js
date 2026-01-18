/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The core spiritual dark theme
        'spiritual-bg': '#0c0a09',      // warm-black
        'spiritual-card': '#1c1917',    // warm-grey
        'spiritual-border': '#292524',  // slightly lighter border
        
        // The Saffron Accent
        'saffron': {
          DEFAULT: '#d97706', // Main gold/amber
          light: '#f59e0b',   // Brighter glow
          dim: 'rgba(217, 119, 6, 0.1)', // Subtle background
        },
        
        // Text Colors
        'parchment': '#e7e5e4',      // readable off-white
        'parchment-dim': '#a8a29e',  // muted text
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],  // For Headings
        sans: ['Lato', 'sans-serif'], // For Body text
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(217, 119, 6, 0.3)', // The holy glow effect
      }
    },
  },
  plugins: [],
}