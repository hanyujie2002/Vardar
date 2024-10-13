<template>
  <div class="w-full font-extralight sm:tracking-wide">
    <ContentDoc
      class="mx-auto max-w-3xl overflow-x-auto text-wrap px-3 text-slate-700 dark:text-slate-300"
    />
    <div
      class="fixed top-[calc(4rem+var(--header-height))] ml-8 hidden max-h-[calc(100vh-var(--header-height))] max-w-72 flex-col overflow-y-auto text-sm/6 text-slate-700 xl:flex dark:text-gray-200"
      data-aos="fade-left"
    >
      <TableOfContents />
    </div>
  </div>
</template>

<script setup>
const { $mermaid } = useNuxtApp();

onMounted(async () => {
  $mermaid().initialize({
    startOnLoad: true,
    deterministicIds: true,
    themeVariables: {
      round: true,
    },
  });
  await nextTick();
  $mermaid().init();
});
</script>

<style>
#toc-title {
  @apply mb-3 text-xl font-bold dark:text-slate-100;
}

.active-toc-item {
  @apply text-yellow-500 dark:text-yellow-200;
}
</style>
