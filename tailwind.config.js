/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
      heading: ['Tan Angleton', 'sans-serif'],
    },
    fontSize: {
      8: '0.5rem',
      9: '0.5625rem',
      10: '0.625rem',
      11: '0.6875rem',
      12: '0.75rem',
      13: '0.8125rem',
      14: '0.875rem',
      15: '0.9375rem',
      16: '1rem',
      17: '1.0625rem',
      18: '1.125rem',
      19: '1.1875rem',
      20: '1.25rem',
      21: '1.3125rem',
      22: '1.375rem',
      23: '1.4375rem',
      24: '1.5rem',
      25: '1.5625rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      34: '2.125rem',
      36: '2.25rem',
      38: '2.375rem',
      40: '2.5rem',
      42: '2.625rem',
      44: '2.75rem',
      46: '2.875rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      54: '3.375rem',
      56: '3.5rem',
      58: '3.625rem',
      60: '3.75rem',
      64: '4rem',
      68: '4.25rem',
      72: '4.5rem',
      76: '4.75rem',
    },
    letterSpacing: {
      tight: '-0.2px',
      normal: '0',
      wide: '0.2px',
      wider: '1px',
      widest: '3px',
    },
    extend: {
      screens: {
        '+2xl': { min: '1600px' },
        '-2xl': { max: '1599px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '-xsm': { max: '475px' },
        '-2xsm': { max: '414px' },
        '-3xsm': { max: '390px' },
        '-4xsm': { max: '375px' },
        '@pixel5': { min: '393px', max: '393px' },
        '@galaxyS8': { min: '360px', max: '360px' },
        '@md': { min: '391px', max: '767px' },
        '@lg': { min: '768px', max: '1023px' },
        '@xl': { min: '1024px', max: '1279px' },
        '@2xl': { min: '1280px', max: '1600px' },
      },
      colors: {
        primary: '#B89835',
        secondary: '#5F5C69',
        tertiary: '#D8D6E2',
        bodyDark: 'rgba(95,92,105,0.7)',
        bodyLight: 'rgba(255,255,255,0.7)',
        white: '#ffffff',
      },
      lineHeight: {
        normal: '1.55em',
        fit: '1em',
        heading: '1.6em',
        headingLarge: '1.7em',
      },
    },
  },
  plugins: [],
};
