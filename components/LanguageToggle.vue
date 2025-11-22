<template>
  <div class="language-toggle" ref="dropdown">
    <button
      class="language-toggle__button"
      @click="toggleDropdown"
      :aria-label="getTranslatedLabel('nav.changeLanguage')"
    >
      <UIcon
        name="i-heroicons-language-20-solid"
        class="w-5 h-5"
      />
    </button>
    
    <div v-if="isOpen" class="language-toggle__dropdown">
      <button
        v-for="availableLocale in availableLocales"
        :key="availableLocale.code"
        :class="[
          'language-toggle__option',
          {
            'language-toggle__option--active': availableLocale.code === currentLocale
          }
        ]"
        @click="switchLanguage(availableLocale.code)"
      >
        <span>{{ availableLocale.name }}</span>
        <svg 
          v-if="availableLocale.code === currentLocale"
          class="language-toggle__check" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { locales } from '~/config/i18n'
import { messages } from '~/locales/messages'

// Fonction helper pour récupérer les traductions
function getTranslatedLabel(key: string): string {
  const { locale } = useI18n()
  const keys = key.split('.')
  let value: any = messages[locale.value as keyof typeof messages]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return typeof value === 'string' ? value : key
}

const { locale, setLocale } = useI18n()
const currentLocale = computed(() => locale.value)
const isOpen = ref(false)
const dropdown = ref()

const availableLocales = locales

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = async (code: 'fr' | 'en') => {
  await setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }
  document.addEventListener('mousedown', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
})
</script>

<style scoped>
.language-toggle {
  position: relative;
  display: inline-block;
}

.language-toggle__button {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  /* border: 1px solid var(--border); */
  /* background: var(--surface); */
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.language-toggle__button:hover {
  background: color-mix(in srgb, var(--surface) 90%, transparent);
  border-color: var(--border-strong);
}

.language-toggle__button:active {
  transform: scale(0.95);
}

.language-toggle__icon {
  width: 16px;
  height: 16px;
}

.language-toggle__dropdown {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 120px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 4px 12px color-mix(in srgb, var(--shadow-color) 15%, transparent);
  padding: 4px;
  z-index: 50;
}

.language-toggle__option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  text-align: left;
}

.language-toggle__option:hover {
  background: color-mix(in srgb, var(--text-primary) 8%, transparent);
  color: var(--text-primary);
}

.language-toggle__option--active {
  color: var(--text-primary);
  font-weight: 500;
}

.language-toggle__check {
  width: 16px;
  height: 16px;
  color: var(--accent);
}
</style>