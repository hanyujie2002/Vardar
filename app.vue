<!-- <template>
  <div>
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <CustomLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Vardar Example Site',
  meta: [
    {
      name: 'description',
      content: 'Example site of Vardar for demenstration',
    },
  ],
});

useSeoMeta({
  title: 'Vardar Example Site',
  ogTitle: 'Vardar Example Site',
  description: 'Example site of Vardar for demenstration',
  ogDescription: 'Example site of Vardar for demenstration',
  ogImage: 'https://vardar-example.vercel.app/ogImage.png',
});
</script>

<style>
:root {
  --header-height: 4rem;
  @apply scroll-smooth bg-gradient-to-r from-white to-themeColor-50 transition-all delay-1000 selection:bg-themeColor-100 selection:text-themeColor-400 scrollbar:w-2.5 scrollbar:bg-transparent scrollbar-track:bg-slate-200 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 dark:from-themeColor-950 dark:to-themeColor-900 dark:scrollbar-track:bg-themeColor-950 dark:scrollbar-thumb:bg-slate-500/50;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}
</style>
