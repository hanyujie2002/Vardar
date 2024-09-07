<template>
  <div class="w-full lg:grid lg:grid-cols-10 lg:gap-8">
    <ContentDoc
      class="overflow-x-auto hyphens-auto text-wrap text-slate-200 lg:col-span-8"
    />
    <TableOfContents
      class="sticky top-[--header-height] flex max-h-[calc(100vh-var(--header-height))] overflow-y-auto text-sm/6 text-slate-200 lg:col-span-2"
    />
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
<style>
input[type='checkbox'] {
  @apply !bg-red-500 checked:!bg-blue-500;
}
</style>
