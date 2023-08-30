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
        colors: {
          palette: {
            blue: "#F5F3FF",
            hash: "#ECEEFF",
            dark: "#6D28D9",
            orange: "#FF6452",
          },
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
