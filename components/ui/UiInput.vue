<template>
  <div class="ui-input-wrapper">
    <label v-if="label" :for="inputId" class="ui-input__label">
      {{ label }}
    </label>
    <input
      :id="inputId"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      class="ui-input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

const inputId = computed(() => `input-${Math.random().toString(36).substring(2, 9)}`)
</script>

<style scoped>
.ui-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ui-input__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
}

.ui-input {
  width: 100%;
  padding: 0.875rem 1.125rem;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border);
  background: var(--surface-muted);
  color: var(--text-primary);
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  font-family: inherit;
}

.ui-input::placeholder {
  color: var(--text-helper);
}

.ui-input:hover {
  border-color: var(--border-strong);
  background: color-mix(in srgb, var(--surface) 90%, transparent);
}

.ui-input:focus {
  outline: none;
  border-color: var(--focus-border);
  background: var(--surface);
  box-shadow: var(--ring);
}

.ui-input:focus::placeholder {
  color: color-mix(in srgb, var(--text-helper) 60%, transparent);
}
</style>
