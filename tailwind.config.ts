import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {        
        ranchers: ['Ranchers', 'serif'],
      },
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        moveBackground: 'moveBackground 80s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
