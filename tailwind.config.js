module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{js,ts}`,
    `./nuxt.config.js`,
  ],
  theme: {
    extend: {
      colors: {
        lightbrown: '#F4C6AF',
        darkbrown: '#A95131',
        darkgrey: '#383838',
        lightgrey: '#D9D9D9',
        faintgrey: '#D0CFCE',
        offwhite: '#FBFBFB;',
        medgrey: '#9F9F9F',
        backgroundgrey: '#F9F5F5',
        darkred: '#98391E',
        newsgrey: '#625D5D',
        gold: '#D69B41',
      },
      fontFamily: {
        sans: ['Satoshi-Regular', 'sans-serif'],
      },
      minHeight: {
        '150px': '150px',
      },
      screens: {
        mdx: { max: '767px' },
        lgx: { max: '1023px' },
        xlx: { max: '1279px' },
      },
      spacing: {
        '300px': '300px',
      },
    },
  },
}
