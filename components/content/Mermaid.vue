<template>
  <div v-if="show" class="mermaid">
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
