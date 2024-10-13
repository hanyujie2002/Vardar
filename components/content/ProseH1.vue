<template>
  <h1
    :id="id"
    class="mb-8 mt-8 scroll-mt-[calc(16px+var(--header-height))] font-serif text-3xl font-bold [text-shadow:_0px_1px_1px_rgba(0,0,0,0.1)] md:text-5xl dark:text-slate-100 dark:[text-shadow:_0_1px_1px_rgba(255,255,255,0.1)]"
    data-aos="fade-up"
  >
    <a v-if="generate" :href="`#${id}`" class="text-shadow-lg shadow-blue-300">
      <slot />
    </a>
    <slot v-else />
  </h1>
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
      (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1))
);
</script>
