<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'ui-button',
      `ui-button--${variant}`,
      { 'ui-button--loading': loading, 'ui-button--block': block }
    ]"
  >
    <svg
      v-if="loading"
      class="ui-button__spinner"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  variant: {
    type: String as PropType<'primary' | 'ghost' | 'solid'>,
    default: 'primary'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
}

.ui-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-button--block {
  width: 100%;
}

.ui-button--primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: var(--accent-contrast);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 30%, transparent);
}

.ui-button--primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px color-mix(in srgb, var(--accent) 40%, transparent);
}

.ui-button--primary:active:not(:disabled) {
  transform: translateY(0);
}

.ui-button--ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--text-secondary);
}

.ui-button--ghost:hover:not(:disabled) {
  border-color: var(--border-strong);
  background: color-mix(in srgb, var(--text-primary) 6%, transparent);
  color: var(--text-primary);
}

.ui-button--solid {
  background: var(--text-primary);
  color: var(--bg-page);
  box-shadow: var(--shadow-soft);
  border-color: var(--border);
}

.ui-button--solid:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-strong);
}

.ui-button--solid:active:not(:disabled) {
  transform: translateY(0);
}

.ui-button__spinner {
  animation: spin 1s linear infinite;
  width: 1.25rem;
  height: 1.25rem;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
