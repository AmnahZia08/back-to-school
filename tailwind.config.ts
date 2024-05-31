import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        doodle: "url('../../public/assets/doodle.jpg')",
      },
      colors: {
        primary: "#272b44",
      },
    },
  },
  plugins: [],
};
export default config;
