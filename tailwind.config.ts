import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dkGreen': '#103c00', // Example color, replace with your actual color values
        'utah-green-one': '#103c00',
        'utah-green-two': '#35711f',
        'utah-green-three': '#60a543',
        'utah-green-four': '#e6efc5',
        'utah-tan-one': '#4f463c',
        'utah-tan-two': '#e7cbaf',
        'utah-grey-one': '#333333',
        'utah-grey-two': '#808080',
        'utah-grey-three': '#f2f2f2',
      },

      fontFamily: {
        // Assuming you have set up these fonts in your global CSS
        'proxima': ['Proxima Nova', 'sans-serif'],
        'interstate': ['Interstate Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

export default config;
