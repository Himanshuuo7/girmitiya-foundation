/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff7e6',
        parchment: '#f8ead0',
        maroon: '#7f1d1d',
        saffron: '#d97706',
        gold: '#b88a2d',
        earth: '#5f3b24',
        leaf: '#2f6b4f',
        ink: '#241811'
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        premium: '0 24px 70px rgba(95, 59, 36, 0.16)',
        glow: '0 18px 44px rgba(217, 119, 6, 0.22)'
      },
      backgroundImage: {
        'cultural-pattern':
          'radial-gradient(circle at 1px 1px, rgba(127,29,29,.16) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
