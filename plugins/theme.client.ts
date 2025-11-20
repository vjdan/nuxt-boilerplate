// @ts-nocheck
import { themeConfig } from '~/config/theme'

const initScript = `
(() => {
  const storageKey = '${themeConfig.storageKey}';
  const cookieName = '${themeConfig.cookieName}';
  const fromCookie = (() => {
    const escaped = cookieName.replace(/([.*+?^\\$\\{\\}\\[\\]()|])/g, '\\\\$1');
    const match = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  })();
  let preference = fromCookie || null;
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') preference = stored;
  } catch (_) {}
  const system = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = preference === 'light' || preference === 'dark' ? preference : system;
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  if (!preference) {
    const expires = new Date(Date.now() + 31536000 * 1000).toUTCString();
    document.cookie = cookieName + '=' + theme + '; path=/; expires=' + expires + '; SameSite=Lax';
    try { window.localStorage.setItem(storageKey, theme); } catch (_) {}
  }
})();`

export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        id: 'theme-init',
        innerHTML: initScript,
        tagPosition: 'head'
      }
    ]
  })

  // Hydrate the reactive theme state after the pre-paint script runs.
  useTheme()
})
