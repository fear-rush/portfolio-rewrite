import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'system-ui', 'sans-serif'],
      mono: ['monospace']
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'pre': {
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            },
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      "primary-green": "#95D2B3",
      "secondary-green": "#55AD9B",
      "third-green": "#D8EFD3",
      "light-gray": "#F4F1F1",
    },
  },
  plugins: [typography],
} as Config;

