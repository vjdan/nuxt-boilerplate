<template>
  <AuroraBackground class="hero-aurora" />
  <AuthWrapper glow-position="left">
    <template #panel>
      <AuthPanelContent
        :eyebrow="getTranslatedLabel('auth.register.eyebrow')"
        :title="getTranslatedLabel('auth.register.title')"
        :description="getTranslatedLabel('auth.register.description')"
      >
        <div class="pill-grid">
          <span v-for="(pill, index) in perks" :key="index" class="pill">{{ pill }}</span>
        </div>
        <div class="milestones">
          <article v-for="milestone in milestones" :key="milestone.title" class="milestone">
            <strong>{{ milestone.time }}</strong>
            <p>{{ milestone.title }}</p>
          </article>
        </div>
      </AuthPanelContent>
    </template>

    <template #form>
      <AuthFormHeader :title="getTranslatedLabel('auth.register.formTitle')">
        <template #subtitle>
          {{ getTranslatedLabel('auth.register.subtitlePrefix') }} <NuxtLink to="/login">{{ getTranslatedLabel('auth.register.subtitleLink') }}</NuxtLink>
        </template>
      </AuthFormHeader>

      <form class="auth-form" @submit.prevent="handleRegister">
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

        <UiInput
          v-model="form.passwordConfirm"
          type="password"
          :label="getTranslatedLabel('auth.common.confirmPassword')"
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
          {{ getTranslatedLabel('auth.register.submit') }}
        </UiButton>
      </form>
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
import AuroraBackground from '~/components/landing/backgrounds/InteractiveEnergyFlows.vue'
import { messages } from '~/locales/messages'

const { register, loading } = useAuth()
const { locale } = useI18n()
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  passwordConfirm: ''
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

const perks = computed(() => [
  getTranslatedLabel('auth.register.perks.0'),
  getTranslatedLabel('auth.register.perks.1'),
  getTranslatedLabel('auth.register.perks.2'),
  getTranslatedLabel('auth.register.perks.3')
])

const milestones = computed(() => [
  { time: getTranslatedLabel('auth.register.milestones.0.time'), title: getTranslatedLabel('auth.register.milestones.0.title') },
  { time: getTranslatedLabel('auth.register.milestones.1.time'), title: getTranslatedLabel('auth.register.milestones.1.title') },
  { time: getTranslatedLabel('auth.register.milestones.2.time'), title: getTranslatedLabel('auth.register.milestones.2.title') }
])

const handleRegister = async () => {
  error.value = ''
  
  if (form.password !== form.passwordConfirm) {
    error.value = getTranslatedLabel('auth.errors.passwordMismatch')
    return
  }

  if (form.password.length < 6) {
    error.value = getTranslatedLabel('auth.errors.passwordLength')
    return
  }

  const success = await register(form.email, form.password)
  if (success) {
    router.push('/login')
  } else {
    error.value = getTranslatedLabel('auth.errors.registrationFailed')
  }
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.pill {
  border-radius: 999px;
  border: 1px solid var(--border);
  padding: 0.35rem 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.milestones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.milestone {
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  background: var(--surface-muted);
  padding: 1rem;
}

.milestone strong {
  display: block;
  color: var(--text-primary);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.milestone p {
  margin: 0.4rem 0 0;
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
