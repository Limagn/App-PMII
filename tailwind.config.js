/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: '#1C1C1C',
        foreground: '#FFFFFF',
        menu: '#1C1917',
        border: {
          DEFAULT: '#A1A19A',
          2: '2D2D33',
        },
        card: '#09090B',
        muted: {
          DEFAULT: '#71717A',
          foreground: '#A1A19A',
        },
      },
    },
  },
  plugins: [],
}

