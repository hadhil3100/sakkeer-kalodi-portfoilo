/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#020408',
          navy: '#050b16',
          deep: '#071022',
          cyan: '#00f0ff',
          blue: '#2563eb',
          electric: '#38bdf8',
          violet: '#8b5cf6',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
