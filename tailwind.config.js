/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // 1. Enable Manual Dark Mode Toggling
  darkMode: 'class', 

  theme: {
    extend: {
      // 2. Map Colors to CSS Variables (This makes the theme switch work)
      colors: {
        'spiritual-bg': 'rgb(var(--color-bg) / <alpha-value>)',
        'spiritual-card': 'rgb(var(--color-card) / <alpha-value>)',
        'parchment': 'rgb(var(--color-text) / <alpha-value>)',
        'parchment-dim': 'rgb(var(--color-text-dim) / <alpha-value>)',
        'saffron': 'rgb(var(--color-saffron) / <alpha-value>)',
        
        // Optional: Hardcoded shades if you need them specifically
        'saffron-light': '#fbbf24', 
        'saffron-dim': 'rgba(245, 158, 11, 0.2)',
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      
      // 3. Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-once': 'spin 0.7s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      boxShadow: {
        'glow': '0 0 20px rgba(217, 119, 6, 0.15)',
        'glow-lg': '0 0 40px rgba(217, 119, 6, 0.2)',
      }
    },
  },
  plugins: [],
}