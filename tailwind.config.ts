import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "linha-inferior": "linear-gradient(to bottom, transparent 50%, #BB9A23 50%)",
        "img-hero": "url('../assets/hero-image.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "dark-blue": "#0A1021",
        "medium-blue": "#455F7E",
        "light-blue": "#157872",
        "medium-white": "#D9D9D9",
        "dark-white": "#C8C3C3",
        "yellow-medium": "#BB9A23",
      },
    },
  },
  plugins: [
  ],
};
export default config;
