import typography from "@tailwindcss/typography";
import colors, { amber, blue, fuchsia, indigo, sky, violet } from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  extend: {},
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'monospace']
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
      violet: colors.violet,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      "primary-green": "#95D2B3",
      "secondary-green": "#55AD9B",
      "third-green": "#D8EFD3",
      "light-gray": "#F4F1F1",
    },
  },

  plugins: [typography],
} as Config;
