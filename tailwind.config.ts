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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#e34c00',
        onprimary: '#ffffff',
        primaryhov: '#fc5603',
        secondary: '#fdfdfd',
        onsecondary: '#ebebeb',
        tertiary: '#fcdd89',
        complement: '#1cb3ff',
      },
    },
  },
  plugins: [],
};
export default config;
