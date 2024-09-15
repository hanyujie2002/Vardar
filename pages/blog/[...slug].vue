<template>
  <div class="w-full">
    <ContentDoc
      class="mx-auto max-w-3xl overflow-x-auto text-wrap px-3 text-slate-200"
    />
    <div
      class="fixed top-[calc(4rem+var(--header-height))] ml-8 hidden max-h-[calc(100vh-var(--header-height))] max-w-72 flex-col overflow-y-auto text-sm/6 text-slate-200 xl:flex"
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
  });
  await nextTick();
  $mermaid().init();
});
</script>
