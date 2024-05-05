import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#134074",
          dark: "#091F39",
        },
        secondary: {
          DEFAULT: "#13315C",
          dark: "#081A31",
        },
        tertiary: {
          DEFAULT: "#0B2545",
          dark: "#051120",
        },
        success: {
          DEFAULT: "#8DA9C4",
          dark: "#B6BEC7",
        },
        warning: {
          DEFAULT: "#F5E150",
          dark: "#F4E151",
        },
        error: {
          DEFAULT: "#EF233C",
          dark: "#D11141",
        },
        downriver: {
          50: "#F3F4F6",
          100: "#B6BEC7",
          200: "#798799",
          300: "#3C516A",
          400: "#0A2342",
          500: "#091F39",
          600: "#081A31",
          700: "#061629",
          800: "#051120",
          900: "#040D18",
          950: "#030910",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0px 4px 8px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.03)",
        xl: "0px 10px 20px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 25px 50px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 35px 60px rgba(0, 0, 0, 0.3)",
        inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.05)",
        none: "none",
      },
    },
  },
  plugins: [],
};
export default config;
