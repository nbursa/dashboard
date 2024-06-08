import type { Config } from 'tailwindcss';

export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#646cff',
        'primary-hover': '#535bf2',
        'dark-bg': '#242424',
        'dark-text': 'rgba(255, 255, 255, 0.87)',
        'light-text': '#213547',
        'light-bg': '#ffffff',
        'webkit-focus-ring-color': '#5b9dd9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
