import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
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
            'code': {
              backgroundColor: colors.gray[100],
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '500',
              wordBreak: 'break-all',
              whiteSpace: 'pre-wrap',
              overflowWrap: 'break-word',
            },
            'pre': {
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            },
            'img': {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
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

