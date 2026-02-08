import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#f7f4eb",
          dark: "#1a1a1a",
        },
        ink: {
          DEFAULT: "#1f2937",
          dark: "#f3f4f6",
        },
        brass: {
          DEFAULT: "#b08d57",
          dark: "#d4a574",
        },
        'parchment-dark': '#1a1a1a',
        'ink-dark': '#f3f4f6',
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
