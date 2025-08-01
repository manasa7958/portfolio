import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        babyBlue: '#dbeafe',
        navyBlue: '#1e3a8a',
        lavenderAccent: '#a78bfa',
      },
    },
  },
  plugins: [],
}
export default config
