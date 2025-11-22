<template>
  <AuroraBackground class="hero-aurora" />
  <AuthWrapper glow-position="right">
    <template #panel>
      <AuthPanelContent
        :eyebrow="getTranslatedLabel('auth.login.eyebrow')"
        :title="getTranslatedLabel('auth.login.title')"
        :description="getTranslatedLabel('auth.login.description')"
        :highlights="highlights"
      >
        <div class="panel-stats">
          <div v-for="stat in panelStats" :key="stat.label" class="stat-item">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </AuthPanelContent>
    </template>

    <template #form>
      <AuthFormHeader :title="getTranslatedLabel('auth.login.formTitle')">
        <template #subtitle>
          {{ getTranslatedLabel('auth.login.subtitlePrefix') }} <NuxtLink to="/register">{{ getTranslatedLabel('auth.login.subtitleLink') }}</NuxtLink>
        </template>
      </AuthFormHeader>

      <form class="auth-form" @submit.prevent="handleLogin">
        <UiInput
          v-model="form.email"
          type="email"
          :label="getTranslatedLabel('auth.common.email')"
          :placeholder="getTranslatedLabel('auth.common.emailPlaceholder')"
          required
        />

        <UiInput
          v-model="form.password"
          type="password"
          :label="getTranslatedLabel('auth.common.password')"
          :placeholder="getTranslatedLabel('auth.common.passwordPlaceholder')"
          required
        />

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <UiButton
          type="submit"
          variant="primary"
          :loading="loading"
          block
        >
          {{ getTranslatedLabel('auth.login.submit') }}
        </UiButton>
      </form>
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
import AuroraBackground from '~/components/landing/backgrounds/InteractiveEnergyFlows.vue'
import { messages } from '~/locales/messages'

const { login, loading } = useAuth()
const { locale } = useI18n()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const error = ref('')

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

const highlights = computed(() => [
  getTranslatedLabel('auth.login.highlights.0'),
  getTranslatedLabel('auth.login.highlights.1'), 
  getTranslatedLabel('auth.login.highlights.2')
])

const panelStats = computed(() => [
  { value: getTranslatedLabel('auth.login.panelStats.0.value'), label: getTranslatedLabel('auth.login.panelStats.0.label') },
  { value: getTranslatedLabel('auth.login.panelStats.1.value'), label: getTranslatedLabel('auth.login.panelStats.1.label') }
])

const handleLogin = async () => {
  error.value = ''
  const success = await login(form.email, form.password)
  if (success) {
    router.push('/dashboard')
  } else {
    error.value = getTranslatedLabel('auth.errors.invalidCredentials')
  }
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.panel-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.stat-item {
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  background: var(--surface-muted);
  padding: 1rem;
}

.stat-item strong {
  display: block;
  font-size: 1.4rem;
  color: var(--text-primary);
}

.stat-item span {
  color: var(--text-secondary);
}

.error-message {
  padding: 1rem;
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--state-error) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--state-error) 35%, transparent);
  color: var(--state-error);
  font-size: 0.9rem;
}
</style>
