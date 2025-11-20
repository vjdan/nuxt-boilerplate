/**
 * Breadcrumb Configuration
 * 
 * Custom labels for specific routes in the breadcrumb navigation.
 * If a route is not listed here, it will be auto-generated from the URL segment.
 */

export const breadcrumbLabels: Record<string, string> = {
  // Dashboard routes
  '/dashboard': 'Dashboard',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/analytics/reports': 'Reports',
  '/dashboard/analytics/insights': 'Insights',
  '/dashboard/users': 'Users',
  '/dashboard/users/list': 'User List',
  '/dashboard/users/roles': 'Roles',
  '/dashboard/settings': 'Settings',
  '/dashboard/settings/profile': 'Profile',
  '/dashboard/settings/security': 'Security',
  '/dashboard/settings/notifications': 'Notifications',
}

/**
 * Get a custom label for a route path
 */
export function getBreadcrumbLabel(path: string): string | undefined {
  return breadcrumbLabels[path]
}
