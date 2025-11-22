<template>
  <nav v-if="breadcrumbs.length > 0" class="breadcrumb">
    <ol class="breadcrumb-list">
      
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path" class="breadcrumb-item">
        <NuxtLink 
          v-if="crumb.path && index < breadcrumbs.length - 1" 
          :to="crumb.path"
          class="breadcrumb-link"
        >
          <UIcon v-if="index === 0" name="i-heroicons-home" class="breadcrumb-icon" />
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="breadcrumb-current">
          <UIcon v-if="index === 0" name="i-heroicons-home" class="breadcrumb-icon" />
          {{ crumb.label }}
        </span>
        <UIcon 
          v-if="index < breadcrumbs.length - 1" 
          name="i-heroicons-chevron-right" 
          class="breadcrumb-separator" 
        />
      </li>

      <ThemeToggle class="theme-toogle"/>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { messages } from '~/locales/messages'

interface Breadcrumb {
  label: string
  path?: string
}

const route = useRoute()
const { locale } = useI18n()

// Translation helper function matching the approach used in index.vue and AppNavbar
const getTranslatedLabel = (key: string) => {
  const currentLocale = locale.value as 'fr' | 'en'
  const keys = key.split('.')
  let value: any = messages[currentLocale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

// Breadcrumb translation mapping
const breadcrumbTranslations: Record<string, string> = {
  // Dashboard routes
  '/dashboard': 'breadcrumbs.dashboard',
  '/dashboard/analytics': 'breadcrumbs.analytics',
  '/dashboard/analytics/reports': 'breadcrumbs.reports',
  '/dashboard/analytics/insights': 'breadcrumbs.insights',
  '/dashboard/users': 'breadcrumbs.users',
  '/dashboard/users/list': 'breadcrumbs.userList',
  '/dashboard/users/roles': 'breadcrumbs.roles',
  '/dashboard/settings': 'breadcrumbs.settings',
  '/dashboard/settings/profile': 'breadcrumbs.profile',
  '/dashboard/settings/security': 'breadcrumbs.security',
  '/dashboard/settings/notifications': 'breadcrumbs.notifications',
}

const breadcrumbs = computed<Breadcrumb[]>(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  const crumbs: Breadcrumb[] = []

  // Build breadcrumbs from path segments
  let currentPath = ''
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Try to get translated label first
    const translationKey = breadcrumbTranslations[currentPath]
    let label = translationKey ? getTranslatedLabel(translationKey) : null
    
    // If no translation found, format from segment
    if (!label) {
      label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    crumbs.push({
      label,
      path: index < pathSegments.length - 1 ? currentPath : undefined
    })
  })

  return crumbs
})
</script>

<style scoped>
.breadcrumb {
  padding: 0 0 2rem;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.06); */
  /* margin-bottom: 2rem; */
}

.theme-toogle {
position: absolute;
right: 2.25rem;
}

@media (max-width: 768px) {
  .theme-toogle {
    display: none;
  }
  .breadcrumb {
    display: none;
}
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .breadcrumb-item {
    padding-left: 3rem;
  }
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
}

.breadcrumb-link:hover {
  color: var(--accent-strong);
  background: var(--accent-soft);
}

.breadcrumb-current {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 0.75rem;
  background: var(--surface-muted);
  border-radius: 0.5rem;
}

.breadcrumb-icon {
  width: 1rem;
  height: 1rem;
}

.breadcrumb-separator {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--text-helper);
}

@media (max-width: 768px) {
  .breadcrumb {
    padding: 0 0 1.25rem;
    margin-bottom: 1.5rem;
  }

  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 0.8125rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
