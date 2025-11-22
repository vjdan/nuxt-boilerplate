<template>
  <footer class="footer">
    <UContainer>
      <div class="footer-grid">
        <div class="brand">
          <div class="logo">✦</div>
          <div>
            <p class="name">{{ getTranslatedLabel('common.appName') }}</p>
            <p class="tagline">{{ getTranslatedLabel('landing.footer.tagline') }}</p>
          </div>
          <div class="chips">
            <span v-for="chip in footerChips" :key="chip">{{ chip }}</span>
          </div>
        </div>

        <div class="links">
          <p>{{ getTranslatedLabel('landing.footer.columns.product.title') }}</p>
          <a v-for="link in productLinks" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>

        <div class="links">
          <p>{{ getTranslatedLabel('landing.footer.columns.resources.title') }}</p>
          <a v-for="link in resourceLinks" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>

        <div class="links">
          <p>{{ getTranslatedLabel('landing.footer.columns.contact.title') }}</p>
          <a v-for="link in contactLinks" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ getTranslatedLabel('landing.footer.bottom.rights').replace('{year}', currentYear.toString()) }}</p>
        <div class="bottom-links">
          <a v-for="legal in legalLinks" :key="legal" href="#">{{ legal }}</a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import { messages } from '~/locales/messages'

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

const currentYear = new Date().getFullYear()

const footerChips = computed(() => 
  getTranslatedLabel('landing.footer.chips') || []
)

const productLinks = computed(() => 
  getTranslatedLabel('landing.footer.columns.product.links') || []
)

const resourceLinks = computed(() => 
  getTranslatedLabel('landing.footer.columns.resources.links') || []
)

const contactLinks = computed(() => 
  getTranslatedLabel('landing.footer.columns.contact.links') || []
)

const legalLinks = computed(() => 
  getTranslatedLabel('landing.footer.bottom.legal') || []
)
</script>

<style scoped>
.footer {
  padding: clamp(2rem, 5vw, 3.5rem) 0;
  border-top: 1px solid var(--border);
  background-color: var(--glass);
  box-shadow: var(--nav-shadow);
  backdrop-filter: blur(16px);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.brand {
  display: grid;
  gap: 0.6rem;
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  color: var(--accent-contrast);
  box-shadow: 0 10px 30px color-mix(in srgb, var(--accent) 30%, transparent);
}

.name {
  margin: 0;
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.tagline {
  margin: 0;
  color: var(--text-secondary);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chips span {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface) 92%, transparent);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

.links {
  display: grid;
  gap: 0.35rem;
}

.links p {
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
}

.links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--text-primary);
}

.footer-bottom {
  margin-top: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--text-secondary);
  border-top: 1px solid var(--border);
  padding-top: 1rem;
}

.bottom-links {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.bottom-links a {
  color: var(--text-secondary);
  text-decoration: none;
}

.bottom-links a:hover {
  color: var(--text-primary);
}
</style>
