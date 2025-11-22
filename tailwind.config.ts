import type { Config } from 'tailwindcss'
import { createRequire } from 'node:module'
import path from 'node:path'

// Bypass package exports to reach Nuxt UI's internal safelist helpers
const require = createRequire(import.meta.url)
const uiColors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'primary']

// Resolve Nuxt UI runtime utils without relying on package exports (works in Docker)
const nuxtUiColorsPath = path.join(process.cwd(), 'node_modules', '@nuxt', 'ui', 'dist', 'runtime', 'utils', 'colors.js')

const { customSafelistExtractor, generateSafelist } = require(nuxtUiColorsPath)
const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')

const config: Partial<Config> = {
  content: {
    files: [
      './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './components/global/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './plugins/**/*.{js,ts,mjs}',
      './composables/**/*.{js,ts,mjs}',
      './utils/**/*.{js,ts,mjs}',
      './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      './{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      './app.config.{js,ts,mjs}',
      './node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}',
      './node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}'
    ],
    transform: {
      vue: (content: string) => content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
    },
    extract: {
      vue: (content: string) => {
        // Align with Nuxt UI's extraction to keep class names during tree-shaking
        const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })
        return [
          ...defaultExtractor(content),
          ...customSafelistExtractor('U', content, uiColors, ['primary'])
        ]
      }
    }
  },
  safelist: generateSafelist(['primary'], uiColors),
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('@headlessui/tailwindcss')
  ]
}

export default config
