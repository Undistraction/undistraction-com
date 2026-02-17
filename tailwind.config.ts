import type { Config } from 'tailwindcss'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'
import typographyPlugin from '@tailwindcss/typography'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: [`din-2014-rounded-variable`, `sans-serif`],
        sans: [`din-2014-rounded-variable`, `sans-serif`],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              'text-decoration-color': '#666',
              transition: 'color 0.3s ease-in-out, text-decoration-color 0.3s ease-in-out',
              '&:hover': {
                color: 'rgb(244 63 94)',
                'text-decoration-color': 'rgb(159 18 57)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typographyPlugin, aspectRatioPlugin],
}
export default config
