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
        ink: { 950: '#0a0909', 900: '#100f0f', 800: '#181616', 700: '#242121', 600: '#3a3535' },
        bone: { 50: '#f6f2eb', 100: '#ece7df', 300: '#b9b2a7', 500: '#8f887e' },
        crimson: { 300: '#ff6b7f', 400: '#f03a52', 500: '#d1142f', 600: '#b01028', 700: '#8a0c1f', 900: '#3b0710' },
        neon: { DEFAULT: '#39ff14' },
        ember: { DEFAULT: '#ff7a1a' },
      },
    },
  },
  plugins: [],
}
