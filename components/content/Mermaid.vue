<template>
  <div
    v-if="show"
    class="mermaid rounded px-1 py-1 transition-all duration-1000 dark:bg-slate-500/85"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const show = ref(false);

onMounted(async () => {
  show.value = true;
});
</script>
