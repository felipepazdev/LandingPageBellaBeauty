/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vapor-night': '#0A0A14',
        'vapor-accent': '#7B61FF',
        'vapor-light': '#F0EFF4',
        'vapor-card': '#18181B',
      },
      fontFamily: {
        'sans': ['Sora', 'system-ui', 'sans-serif'],
        'serif': ['Instrument Serif', 'serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      borderRadius: {
        'cinema': '2rem',
      },
      transitionTimingFunction: {
        'cinema-in': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'cinema-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
