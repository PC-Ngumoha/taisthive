import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
              light: '#FF9F43', // Apricot Light
              DEFAULT: '#FF6B6B', // Salmon Red
              dark: '#E65100', // darker Apricot
            },
            secondary: {
              light: '#E0E0E0', // Medium Gray Light
              DEFAULT: '#F5F5F5', // Light Gray
              dark: '#A9A9A9', // Darker Gray
            },
            accent: '#4CAF50', // Green
            warning: '#FFC107', // Amber
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        lobster: ["var(--font-lobster-two)", "cursive"],
      }
    },
  },
  plugins: [],
} satisfies Config;
