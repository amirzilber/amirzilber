import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#080b11',
        panel: '#101523',
        accent: '#4b7bff',
        muted: '#99a3c0'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(84,125,255,0.2), 0 10px 60px rgba(24,47,117,0.3)'
      }
    }
  },
  plugins: []
};

export default config;
