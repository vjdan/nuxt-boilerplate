/**
 * Global theme tokens used to generate CSS variables for light/dark modes.
 * Extend the palettes here – everything else reads from these values.
 */

export const themeConfig = {
  storageKey: 'app-theme',
  cookieName: 'app-theme',
  themes: {
    light: {
      colorScheme: 'light',
      page: '#f6f8fb',
      pageMuted: '#e8edf5',
      surface: '#ffffff',
      surfaceMuted: '#f8fafc',
      glass: 'rgba(255, 255, 255, 0.9)',
      border: '#e2e8f0',
      borderStrong: '#cbd5e1',
      text: '#0f172a',
      textMuted: '#475569',
      textHelper: '#64748b',
      accent: '#6366f1',
      accentStrong: '#4f46e5',
      accentContrast: '#ffffff',
      accentSoft: '#eef2ff',
      accentBorder: '#c7d2fe',
      pageGradient: 'radial-gradient(circle at 18% 20%, rgba(99, 102, 241, 0.12), transparent 32%), radial-gradient(circle at 78% 0%, rgba(56, 189, 248, 0.12), transparent 30%), linear-gradient(180deg, #f8fafc 0%, #e8edf5 100%)',
      shadowSoft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      shadowStrong: '0 22px 60px rgba(15, 23, 42, 0.12)',
      overlay: 'rgba(0, 0, 0, 0.35)',
      navShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
      ring: '0 0 0 3px rgba(79, 70, 229, 0.25)',
      focusBorder: '#4f46e5'
    },
    dark: {
      colorScheme: 'dark',
      page: '#050a14',
      pageMuted: '#0a0f1e',
      surface: '#0f172a',
      surfaceMuted: '#111827',
      glass: 'rgba(10, 15, 30, 0.85)',
      border: 'rgba(255, 255, 255, 0.08)',
      borderStrong: 'rgba(255, 255, 255, 0.14)',
      text: '#e5e7eb',
      textMuted: '#cbd5e1',
      textHelper: '#9ca3af',
      accent: '#818cf8',
      accentStrong: '#6366f1',
      accentContrast: '#ffffff',
      accentSoft: 'rgba(99, 102, 241, 0.14)',
      accentBorder: 'rgba(99, 102, 241, 0.35)',
      pageGradient: 'radial-gradient(circle at 20% 18%, rgba(99, 102, 241, 0.12), transparent 32%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.09), transparent 28%), linear-gradient(180deg, #0a0f1e 0%, #050a14 100%)',
      shadowSoft: '0 10px 30px rgba(0, 0, 0, 0.28)',
      shadowStrong: '0 18px 50px rgba(0, 0, 0, 0.35)',
      overlay: 'rgba(0, 0, 0, 0.6)',
      navShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      ring: '0 0 0 3px rgba(99, 102, 241, 0.25)',
      focusBorder: '#6366f1'
    }
  },
  state: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#0ea5e9'
  },
  radius: {
    sm: '0.375rem',
    DEFAULT: '0.625rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    full: '9999px'
  }
}

export type ThemeName = keyof typeof themeConfig.themes
export type ThemeConfig = typeof themeConfig
