/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landmarks': "url('/landmarks.svg')",
      },
      colors: {
        transparent: 'transparent',
        'dark': '#34353A',
        'lighterDark': '#34353A',
      },
      animation: {
        'custom-bounce': 'custom-bounce 3s infinite',
        'slide': 'slide 200s linear infinite',
        typing: 'typing 2s steps(20), blink 1s infinite',
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        'slide': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '1900% 0' },
        },
        'typing': {
          '0%': {
            width: '0',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
            visibility: 'visible',
          },
        },
        'blink': {
          '0%': { borderColor: 'transparent' },
          '75%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
