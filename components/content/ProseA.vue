<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="scroll-mt-[calc(16px+var(--header-height))] text-yellow-500 hover:underline dark:text-yellow-200"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<
      | '_blank'
      | '_parent'
      | '_self'
      | '_top'
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>
