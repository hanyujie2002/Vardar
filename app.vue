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

<style>
:root {
  --header-height: 4rem;
  @apply scroll-smooth bg-gradient-to-r from-themeColor-700 to-themeColor-400 selection:bg-themeColor-100 selection:text-themeColor-400;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}
</style>

<script setup lang="ts">
useHead({
  title: 'Vardar Example Site',
  meta: [
    { name: 'description', content: 'Example site of Vardar for demenstration' }
  ]
})

useSeoMeta({
  title: 'Vardar Example Site',
  ogTitle: 'Vardar Example Site',
  description: 'Example site of Vardar for demenstration',
  ogDescription: 'Example site of Vardar for demenstration',
  ogImage: 'https://vardar-example.vercel.app/ogImage.png'
})
</script>
