import { themeConfig, type ThemeName } from '~/config/theme'

const STORAGE_KEY = themeConfig.storageKey
const COOKIE_NAME = themeConfig.cookieName

const getSystemTheme = (): ThemeName => {
  if (process.client && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const headers = useRequestHeaders(['sec-ch-prefers-color-scheme'])
  return headers?.['sec-ch-prefers-color-scheme'] === 'dark' ? 'dark' : 'light'
}

const applyDOMTheme = (value: ThemeName) => {
  if (!process.client) return

  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(value)
  root.dataset.theme = value
  root.style.colorScheme = value
}

export const useTheme = () => {
  const cookie = useCookie<ThemeName | null>(COOKIE_NAME, {
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
    default: () => null
  })

  const initialTheme = (): ThemeName => {
    const stored = cookie.value
    if (stored === 'light' || stored === 'dark') return stored

    if (process.client) {
      const local = (window.localStorage?.getItem(STORAGE_KEY) as ThemeName | null) || null
      if (local === 'light' || local === 'dark') return local
    }

    return getSystemTheme()
  }

  const theme = useState<ThemeName>('theme', initialTheme)

  const persist = (value: ThemeName) => {
    if (process.client) {
      window.localStorage?.setItem(STORAGE_KEY, value)
      cookie.value = value
    }
  }

  const setTheme = (value: ThemeName) => {
    theme.value = value
    persist(value)
    applyDOMTheme(value)
  }

  if (process.client) {
    watch(
      theme,
      value => {
        persist(value)
        applyDOMTheme(value)
      },
      { immediate: true }
    )

    onMounted(() => {
      const stored = (window.localStorage?.getItem(STORAGE_KEY) as ThemeName | null) || cookie.value
      if (stored && stored !== theme.value) {
        setTheme(stored)
      } else {
        applyDOMTheme(theme.value)
      }
    })
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    availableThemes: Object.keys(themeConfig.themes) as ThemeName[]
  }
}
