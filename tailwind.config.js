/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color))',
        secondary: 'rgb(var(--secondary-color))',
        tertiary: 'rgb(var(--tertiary-color))',
        neutral: 'rgb(var(--neutral-color))',
        base: 'rgb(var(--base-color))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(156 163 175)',
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            h4: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
            a: {
              color: 'rgb(var(--primary-color))',
              '&:hover': {
                color: 'rgb(var(--primary-color) / 0.8)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};