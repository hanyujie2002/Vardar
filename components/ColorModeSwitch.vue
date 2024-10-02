<template>
  <button
    title="Switch Color Mode"
    aria-label="Switch Color Mode"
    @click="switchColorMode"
  >
    <Icon
      :name="
        savedTheme === 'dark'
          ? 'material-symbols:dark-mode-outline-rounded'
          : 'material-symbols:sunny-outline-rounded'
      "
      class="size-10 transition-colors hover:text-yellow-500 active:text-yellow-400 sm:size-12 dark:hover:text-yellow-100 dark:active:text-yellow-200"
    />
  </button>
</template>

<script setup lang="ts">
const savedTheme = useCookie('saved_theme');

useHead({
  htmlAttrs: {
    class: computed(() => (savedTheme.value === 'dark' ? 'dark' : '')),
  },
});

const switchColorMode = () => {
  if (savedTheme.value === 'dark') {
    savedTheme.value = '';
  } else {
    savedTheme.value = 'dark';
  }
};
</script>
