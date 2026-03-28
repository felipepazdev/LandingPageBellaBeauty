/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0A0A0A',
        'luxury-gold': '#C5A028',
        'luxury-gold-light': '#E5C158',
        'luxury-light': '#FDFDFD',
        'luxury-card': '#111111',
        // Fallbacks para as referências existentes
        'vapor-night': '#0A0A0A',
        'vapor-accent': '#C5A028',
        'vapor-light': '#FDFDFD',
        'vapor-card': '#111111',
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
