<template>
  <div class="mermaid" v-if="show">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const show = ref(false);

onMounted(async () => {
  show.value = true;
});
</script>
