import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '576px', // Custom breakpoint
      },
      colors: {
        brand: {
          royalty: '#0F0E54',
          blue: '#2000B1',
          purple: '#8B53FE',
          white: '#F2F3F4',
        },
      },
    },
  },
  plugins: [],
};

export default config;