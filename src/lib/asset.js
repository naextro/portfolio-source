// Respects Vite's `base` so images work both on Vercel ("/") and GitHub Pages ("/portfolio/").
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
