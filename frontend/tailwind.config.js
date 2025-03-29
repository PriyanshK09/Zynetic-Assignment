/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F3F4F6', // Light Gray
          dark: '#1F2937', // Dark Gray
        },
        secondary: {
          light: '#E5E7EB', // Soft Gray
          dark: '#374151', // Charcoal Gray
        },
        text: {
          primaryLight: '#111827', // Almost Black
          primaryDark: '#F9FAFB', // Almost White
          secondaryLight: '#4B5563', // Medium Gray
          secondaryDark: '#D1D5DB', // Light Gray
        },
        accent: {
          light: '#3B82F6', // Blue
          dark: '#2563EB', // Darker Blue
        },
        background: {
          light: '#FFFFFF', // White
          dark: '#111827', // Almost Black
        },
        card: {
          light: '#F9FAFB', // Light Gray
          dark: '#1E293B', // Navy Gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
