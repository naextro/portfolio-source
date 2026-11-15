/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: { 950: '#060d0e', 900: '#0a1516', 800: '#0f1c1e', 700: '#18292c', 600: '#2b4348' },
        bone: { 50: '#f3fafc', 100: '#e3f0f4', 300: '#a8c1c9', 500: '#6f8e97' },
        pine: { 300: '#8fe5bd', 400: '#43d492', 500: '#2fb77c', 600: '#16794f', 700: '#10593c', 900: '#07291c' },
        glacier: { DEFAULT: '#4cbbe8' },
        ice: { DEFAULT: '#b4eaf6' },
      },
    },
  },
  plugins: [],
}
