/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0A43E6',
        lime: '#C7FF00',
        ink: '#111318',
        muted: '#6C7280'
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 50px rgba(7, 18, 67, 0.08)',
        float: '0 26px 70px rgba(8, 31, 111, 0.18)'
      }
    }
  },
  plugins: []
}
