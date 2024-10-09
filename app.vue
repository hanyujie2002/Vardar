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

<script setup lang="ts"></script>

<style>
:root {
  --header-height: 4rem;
  @apply scroll-smooth bg-gradient-to-r from-white to-themeColor-50 transition-all delay-1000 selection:bg-themeColor-100 selection:text-themeColor-400 scrollbar:w-2.5 scrollbar:bg-transparent scrollbar-track:bg-slate-200 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 dark:from-themeColor-950 dark:to-themeColor-900 dark:selection:bg-themeColor-800/50 dark:selection:text-inherit dark:scrollbar-track:bg-themeColor-950 dark:scrollbar-thumb:bg-slate-500/50;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}

.admonition-note {
  @apply rounded-r border border-l-4 border-blue-500 bg-blue-50 p-2 sm:p-4 dark:border-blue-700 dark:bg-blue-900;
}
.admonition-note-title {
  @apply font-bold;
}

.admonition-warning {
  @apply rounded-r border border-l-4 border-yellow-500 bg-yellow-50 p-2 sm:p-4 dark:border-yellow-700 dark:bg-yellow-900;
}
.admonition-warning-title {
  @apply font-bold;
}

.admonition-important {
  @apply rounded-r border border-l-4 border-red-500 bg-red-50 p-2 sm:p-4 dark:border-red-700 dark:bg-red-900;
}
.admonition-important-title {
  @apply font-bold;
}

.admonition-tip {
  @apply rounded-r border border-l-4 border-green-500 bg-green-50 p-2 sm:p-4 dark:border-green-700 dark:bg-green-900;
}
.admonition-tip-title {
  @apply font-bold;
}

.admonition-caution {
  @apply rounded-r border border-l-4 border-orange-500 bg-orange-50 p-2 sm:p-4 dark:border-orange-700 dark:bg-orange-900;
}
.admonition-caution-title {
  @apply font-bold;
}
</style>
