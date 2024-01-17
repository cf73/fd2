module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
    },
    
    extend: {
      colors: {
        night: '#151515',
        slate: '#222122',
        warmwhite: '#FCF2E6',
        grey: '#E7E2E0;',
        highlight: '#FA9947',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}