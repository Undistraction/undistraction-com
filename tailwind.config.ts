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
        sans: [`din-2014-rounded-variable`, `sans-serif`],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      // typography: () => ({
      //   DEFAULT: {
      //     css: {
      //       maxWidth: '65ch',
      //     },
      //   },
      // }),
    },
  },
  plugins: [typographyPlugin, aspectRatioPlugin],
}
export default config
