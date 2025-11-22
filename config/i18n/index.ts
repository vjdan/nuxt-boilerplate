export type { LocaleObject } from '@nuxtjs/i18n'

// Export locale objects for easy import in components
export const locales = [
  {
    code: 'fr',
    iso: 'fr-FR',
    name: 'Français',
    file: 'fr.json'
  },
  {
    code: 'en',
    iso: 'en-US',
    name: 'English', 
    file: 'en.json'
  }
] as const

export type LocaleCode = typeof locales[number]['code']

// Helper function to get locale display name
export function getLocaleDisplayName(code: LocaleCode): string {
  const locale = locales.find(l => l.code === code)
  return locale?.name ?? code
}