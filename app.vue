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
  @apply scroll-smooth bg-gradient-to-r from-themeColor-700 to-themeColor-400 selection:bg-themeColor-100 selection:text-themeColor-400;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
