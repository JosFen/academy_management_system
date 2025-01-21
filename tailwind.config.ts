import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        hedgiePink: '#FFE2E2',
        hedgieBlue: 'D2E0FB',
        hedgieGreen: 'D7E5CA',
        hedgieYellow: 'F9F3CC',
        hedgieRed: 'FF8A8A',
        hedgiePurple: 'DFCCFB'
      }
    }
  },
  plugins: []
}
export default config
