<template>
  <h6
    :id="id"
    class="mb-4 mt-4 scroll-mt-[calc(16px+var(--header-height))] text-xs font-semibold"
  >
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h6>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports';

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === 'boolean' &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h6))
);
</script>
