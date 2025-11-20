# Breadcrumb Navigation

Automatic breadcrumb navigation component for the dashboard layout.

## Features

✅ **Automatic Generation** - Breadcrumbs are auto-generated from the current route path  
✅ **Clickable Parents** - All parent pages are clickable links  
✅ **Current Page** - Last item is non-clickable and highlighted  
✅ **Home Icon** - First item shows a home icon for the dashboard  
✅ **Custom Labels** - Configure custom labels in `/config/breadcrumb.ts`  
✅ **Responsive** - Works on all screen sizes  

## Usage

The breadcrumb is automatically displayed in the dashboard layout. No need to add it manually to your pages.

### Example Routes

| Route | Breadcrumb Display |
|-------|-------------------|
| `/dashboard` | **Dashboard** |
| `/dashboard/analytics` | [Dashboard](#) › **Analytics** |
| `/dashboard/analytics/reports` | [Dashboard](#) › [Analytics](#) › **Reports** |
| `/dashboard/users/list` | [Dashboard](#) › [Users](#) › **List** |

## Customizing Labels

Edit `/config/breadcrumb.ts` to add custom labels for specific routes:

```typescript
export const breadcrumbLabels: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/analytics/reports': 'Reports',
  '/dashboard/users/custom-page': 'My Custom Label',
}
```

If no custom label is defined, the breadcrumb will auto-generate a label from the URL segment:
- `user-management` → "User Management"
- `api-settings` → "Api Settings"

## Component Location

- Component: `/components/layout/Breadcrumb.vue`
- Configuration: `/config/breadcrumb.ts`
- Used in: `/app.vue` (dashboard layout only)

## Styling

The breadcrumb uses the same dark theme design system as the rest of the dashboard:

- **Link Color**: `rgba(248, 250, 252, 0.6)` (muted white)
- **Hover Color**: `#22d3ee` (cyan accent)
- **Current Page**: `#f8fafc` (bright white)
- **Separator**: Chevron icon with subtle opacity

## Mobile Behavior

On smaller screens, the breadcrumb automatically wraps and reduces font size for better readability.

## Accessibility

- Uses semantic `<nav>` and `<ol>` elements
- Proper ARIA labels could be added for screen readers
- Keyboard navigable (standard link behavior)

---

**Note**: The breadcrumb only appears in the dashboard layout. Public pages do not show breadcrumbs.
