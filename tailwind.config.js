/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#22c55e',
        'neon-magenta': '#ff00cc',
        'neon-cyan': '#06b6d4',
        'neon-blue': '#3b82f6',
        'cyber-card': '#0b1220',
        'cyber-dark': '#07090b',
        // add whatever you use
      },
    },
  },
  plugins: [],
};
