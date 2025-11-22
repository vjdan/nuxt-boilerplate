<template>
  <div class="dashboard-page">
    <h1>{{ getTranslatedLabel('dashboard.pages.users.title') }}</h1>
    <p>{{ getTranslatedLabel('dashboard.pages.users.description') }}</p>
    
    <div class="demo-cards">
      <UiCard>
        <h3>{{ getTranslatedLabel('dashboard.pages.users.cards.0.title') }}</h3>
        <p class="metric metric--accent">{{ getTranslatedLabel('dashboard.pages.users.cards.0.metric') }}</p>
      </UiCard>
      <UiCard>
        <h3>{{ getTranslatedLabel('dashboard.pages.users.cards.1.title') }}</h3>
        <p class="metric metric--success">{{ getTranslatedLabel('dashboard.pages.users.cards.1.metric') }}</p>
      </UiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { messages } from '~/locales/messages'

definePageMeta({
  middleware: 'auth'
})

const { locale } = useI18n()

// Translation helper function
const getTranslatedLabel = (key: string) => {
  const currentLocale = locale.value as 'fr' | 'en'
  const keys = key.split('.')
  let value: any = messages[currentLocale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}
</script>

<style scoped>
.dashboard-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.dashboard-page p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.demo-cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.demo-cards h3 {
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.metric {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.metric--accent {
  color: var(--accent-strong);
}

.metric--success {
  color: var(--state-success);
}
</style>
