import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  
      animation: {
        colorChange: 'color_change 5s infinite ease',
        waveAlarm: 'waveAlarm 2s ease-in-out infinite',
      },
      keyframes: {
        color_change: {
          '0%': { color: 'red' },
          '50%': { color: 'blue' },
          '100%': { color: 'green' },
        },
        waveAlarm: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '0.4' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
