import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // app directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // components
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // src directory 포함
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          '"Malgun Gothic"',
          '"맑은 고딕"',
          '"Noto Sans KR"',
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "var(--font-inter)",
          '"Malgun Gothic"',
          '"맑은 고딕"',
          '"Noto Sans KR"',
          "monospace",
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
