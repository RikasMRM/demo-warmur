import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "mate-black": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#0c2233",
          900: "#2a3442",
        },
        "primary-orange": "#FF6452",
        "secondary-orange": "#f79761",
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#e0ddd9',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
