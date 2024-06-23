import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ['var(--font-jakarta)'],
      },
      colors: {
        primario: "#141414",
        secundario: "#3A83A9",
        colorcards: "#4141414f",
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  }, 

  plugins: [
    nextui(),
    require('preline/plugin')],
},);

