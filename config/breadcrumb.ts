/**
 * Breadcrumb Configuration
 * 
 * Custom labels for specific routes in the breadcrumb navigation.
 * If a route is not listed here, it will be auto-generated from the URL segment.
 */

export const breadcrumbLabels: Record<string, string> = {
  // Dashboard routes - now using translation keys
  '/dashboard': 'dashboard.breadcrumb.dashboard',
  '/dashboard/analytics': 'dashboard.breadcrumb.analytics',
  '/dashboard/analytics/reports': 'dashboard.breadcrumb.reports',
  '/dashboard/analytics/insights': 'dashboard.breadcrumb.insights',
  '/dashboard/users': 'dashboard.breadcrumb.users',
  '/dashboard/users/list': 'dashboard.breadcrumb.userList',
  '/dashboard/users/roles': 'dashboard.breadcrumb.roles',
  '/dashboard/settings': 'dashboard.breadcrumb.settings',
  '/dashboard/settings/profile': 'dashboard.breadcrumb.profile',
  '/dashboard/settings/security': 'dashboard.breadcrumb.security',
  '/dashboard/settings/notifications': 'dashboard.breadcrumb.notifications',
}

/**
 * Get a custom label for a route path
 */
export function getBreadcrumbLabel(path: string): string | undefined {
  return breadcrumbLabels[path]
}
