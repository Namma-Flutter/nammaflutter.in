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
        secondary: '#1B1F23',
        accent: '#0DC7FF',
        'accent-light': '#C6F3FF',
        highlight: '#FFFAD2',
        // Flutter rich palette
        flutterBlue: '#02569B',
        flutterCyan: '#13B9FD',
        flutterSky: '#42A5F5',
        flutterLightBlue: '#039BE5',
        flutterGradientStart: '#02569B',
        flutterGradientMid: '#42A5F5',
        flutterGradientEnd: '#00C6FB',
        flutterViolet: '#7B61FF',
        flutterYellow: '#FFD600',
        flutterGlass: 'rgba(255,255,255,0.60)',
        flutterDarkGlass: 'rgba(27,31,35,0.70)',
      },
      boxShadow: {
        'flutter-glow': '0 2px 16px 4px #42A5F580, 0 1.5px 6px 1.5px #13B9FD80',
      },
      fontFamily: {
        heading: ['Geist', 'Inter', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Geist', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'flutter-radial': 'radial-gradient(circle at 70% 30%, #42A5F5 0%, #00C6FB 50%, #02569B 100%)',
        'flutter-angled': 'linear-gradient(120deg, #02569B 0%, #42A5F5 50%, #00C6FB 100%)',
      },
      borderRadius: {
        flutter: '1.5rem',
      },
      borderWidth: {
        flutter: '3px',
      },
    },
  },
  plugins: [],
}