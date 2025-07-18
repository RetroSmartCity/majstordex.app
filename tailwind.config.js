/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.{md,mdx}', // podrška za MDX blog postove
  ],
  darkMode: 'class', // omogućen dark mode putem klase
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
              textDecoration: 'underline',
            },
            h1: {
              fontWeight: '700',
              fontSize: theme('fontSize.3xl'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '600',
              fontSize: theme('fontSize.2xl'),
              color: theme('colors.gray.900'),
            },
            p: {
              marginTop: '1em',
              marginBottom: '1em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
