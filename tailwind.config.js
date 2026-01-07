/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6E7891',
        'accent': '#FFA500',
        'background-dark': '#282C35',
        'card-dark': '#343844',
        'text-light': '#f6f7f8',
        'muted': '#9ca3b5',
        'border': '#424857',
      },
      fontFamily: {
        'display': ['Lexend', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

