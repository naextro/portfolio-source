/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans": ["Funnel", "sans-serif"]
      }
    },
  },
  plugins: [tailwindScrollbar],
}

