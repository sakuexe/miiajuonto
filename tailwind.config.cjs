const fonts = require("tailwindcss/defaultTheme").fontFamily;
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const thunder = {
  50: "#f8f7f8",
  100: "#f1edee",
  200: "#e0d7db",
  300: "#c5b4bc",
  400: "#a48c98",
  500: "#896e7c",
  600: "#715864",
  700: "#5c4851",
  800: "#4e3e45",
  900: "#43373d",
  950: "#1b1618",
};

const mandy = {
  50: "#fcf3f6",
  100: "#fbe8ef",
  200: "#f9d1e0",
  300: "#f5acc6",
  400: "#ee789f",
  500: "#e4517d",
  600: "#d23058",
  700: "#b62041",
  800: "#961e37",
  900: "#7e1d31",
  950: "#4c0b18",
};

const primary = thunder;
const secondary = mandy;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      ...fonts,
      sans: ["Inter Variable", "Inter", ...fonts.sans],
    },
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        primary: { ...primary, DEFAULT: primary[950] },
        secondary: { ...secondary, DEFAULT: secondary[500] },
        thunder,
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      dropShadow: {
        "secondary-sm": `0 1px 1px ${secondary[500]}0d`,
        secondary: [
          `0 1px 2px ${secondary[900]}bf`,
          `0 1px 1px ${secondary[500]}3a`,
        ],
        "secondary-md": [
          `0 4px 3px ${secondary[900]}bf`,
          `0 2px 2px ${secondary[500]}3a`,
        ],
        "secondary-lg": [
          `0 10px 8px ${secondary[900]}bf`,
          `0 4px 3px ${secondary[500]}4d`,
        ],
        "secondary-xl": [
          `0 20px 13px ${secondary[900]}`,
          `0 8px 5px ${secondary[500]}4d`,
        ],
        "secondary-2xl": `0 25px 25px ${secondary[500]}8f`,
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
