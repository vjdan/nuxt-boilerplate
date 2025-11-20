<template>
  <div class="auth-form-header">
    <h2 class="auth-form-title">{{ title }}</h2>
    <p class="auth-form-subtitle">
      <slot name="subtitle" />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.auth-form-header {
  margin-bottom: 2rem;
}

.auth-form-title {
  font-size: 1.875rem;
  color: var(--text-primary);
  margin: 0 0 0.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.auth-form-subtitle {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9375rem;
}

.auth-form-subtitle :deep(a) {
  color: var(--accent-strong);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  border-bottom: 1.5px solid transparent;
}

.auth-form-subtitle :deep(a:hover) {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
</style>
