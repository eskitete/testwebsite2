import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        ink: '#0B1220',
        sand: '#FAFAF9',
        brass: '#D97706'
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'html, body, #root': { height: '100%' }
      })
    })
  ]
} as Config
