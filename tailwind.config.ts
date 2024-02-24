import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-purple',
    'bg-yellow',
    'bg-teal',
    'bg-gray',
  ],
  theme: {
    extend: {
      colors: {
        base: '#3D3D3D', // Adding a custom color named 'base'
        purple: '#8083CC',
        yellow: '#F3C82E',
        teal: '#39CDC4',
        light: '#F9F9FA',
        gray: "#F0EFEF",
        orange: "#DE6430",
        brown: "#7D2703",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Extend the 'textColor' theme to include the custom color 'base'
      textColor: {
        'base': '#3D3D3D',
      }
    },
  },
  plugins: [],
};
export default config;
