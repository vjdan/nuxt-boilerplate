export interface NavLink {
  label: string
  to: string
  icon?: string
}

export interface DashboardMenuItem {
  label: string
  to?: string
  icon: string
  children?: DashboardMenuItem[]
}

/**
 * Public navigation links (marketing/landing pages)
 * Note: labels are now translation keys
 */
export const publicNavLinks: NavLink[] = [
  { label: 'nav.features', to: '/#features' },
  { label: 'nav.pricing', to: '/#pricing' },
  { label: 'nav.faq', to: '/#faq' },
]

/**
 * Dashboard sidebar menu structure
 * Supports nested sub-items for complex navigation
 * Note: labels are now translation keys
 */
export const dashboardMenuItems: DashboardMenuItem[] = [
  {
    label: 'dashboard.menu.overview',
    to: '/dashboard',
    icon: 'i-heroicons-home',
  },
  {
    label: 'dashboard.menu.analytics',
    icon: 'i-heroicons-chart-bar',
    children: [
      { label: 'dashboard.menu.reports', to: '/dashboard/analytics/reports', icon: 'i-heroicons-document-text' },
      { label: 'dashboard.menu.insights', to: '/dashboard/analytics/insights', icon: 'i-heroicons-light-bulb' },
    ],
  },
  {
    label: 'dashboard.menu.users',
    icon: 'i-heroicons-users',
    children: [
      { label: 'dashboard.menu.allUsers', to: '/dashboard/users', icon: 'i-heroicons-user-group' },
      { label: 'dashboard.menu.roles', to: '/dashboard/users/roles', icon: 'i-heroicons-shield-check' },
    ],
  },
  {
    label: 'dashboard.menu.settings',
    to: '/dashboard/settings',
    icon: 'i-heroicons-cog-6-tooth',
  },
]
