<template>
  <button
    title="Switch Color Mode"
    aria-label="Switch Color Mode"
    @click="switchColorMode"
  >
    <div v-if="colorMode.value === 'dark'">
      <MaterialSymbolsDarkModeOutlineRounded
        class="size-10 transition-colors hover:text-yellow-500 active:text-yellow-400 sm:size-12 dark:hover:text-yellow-100 dark:active:text-yellow-200"
      />
    </div>
    <div v-else-if="colorMode.value === 'light'">
      <MaterialSymbolsSunnyOutlineRounded
        class="size-10 transition-colors hover:text-yellow-500 active:text-yellow-400 sm:size-12 dark:hover:text-yellow-100 dark:active:text-yellow-200"
      />
    </div>
    <div v-else>
      <div class="size-10 sm:size-12" />
    </div>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const switchColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
