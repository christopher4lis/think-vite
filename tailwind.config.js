module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#21437A'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
