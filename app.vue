<!-- <template>
  <div>
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --header-height: 4rem;
  @apply bg-gradient-to-r from-violet-700 to-violet-400 scroll-smooth;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}
</style>
