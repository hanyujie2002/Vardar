<template>
  <div class="w-full">
    <ContentDoc
      class="mx-auto max-w-3xl overflow-x-auto hyphens-auto text-wrap px-3 text-slate-200"
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
