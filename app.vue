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
  @apply scroll-smooth bg-gradient-to-r from-violet-700 to-violet-400;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}
</style>
