<template>
  <div class="auth-panel-content">
    <p class="auth-eyebrow">{{ eyebrow }}</p>
    <h1 class="auth-title">{{ title }}</h1>
    <p class="auth-description">{{ description }}</p>

    <ul v-if="highlights.length" class="auth-highlights">
      <li v-for="(item, index) in highlights" :key="index">
        {{ item }}
      </li>
    </ul>

    <div v-if="$slots.default" class="auth-extra">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  eyebrow: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  highlights: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>

<style scoped>
.auth-eyebrow {
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-strong);
  font-size: 0.8125rem;
  margin: 0;
  font-weight: 700;
}

.auth-title {
  font-size: clamp(2rem, 3vw, 2.75rem);
  color: var(--text-primary);
  margin: 0.75rem 0 1rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.auth-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 1.5rem;
  font-size: 1rem;
}

.auth-highlights {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.auth-highlights li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.auth-highlights li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent) 0%, var(--state-success) 100%);
  flex-shrink: 0;
  box-shadow: 0 0 8px color-mix(in srgb, var(--accent) 40%, transparent);
}

.auth-extra {
  margin-top: 2rem;
}
</style>
