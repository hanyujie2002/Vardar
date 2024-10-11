<template>
  <input :checked="props.checked" :type="props.type" :disabled="true" >
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
input[type='Checkbox'] {
  @apply relative mt-auto h-3.5 w-3.5 appearance-none rounded border border-slate-200 bg-white transition-colors duration-1000 dark:border-slate-900 dark:bg-slate-700;
}

input[type='checkbox']:checked::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='lightgreen' d='M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z'/%3E%3C/svg%3E");
  @apply absolute left-0 top-0 flex h-full w-full content-center items-center;
}
</style>
