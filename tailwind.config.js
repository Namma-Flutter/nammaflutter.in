/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#1D1D1E',
        accent: '#0DC7FF',
        'accent-light': '#C6F3FF',
        highlight: '#FFFAD2',
      },
    },
  },
  plugins: [],
}