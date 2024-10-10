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
  @apply scroll-smooth bg-gradient-to-r from-white to-themeColor-50 text-sm transition-all delay-1000 selection:bg-themeColor-100 selection:text-themeColor-400 scrollbar:w-2.5 scrollbar:bg-transparent scrollbar-track:bg-slate-200 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 sm:text-base dark:from-themeColor-950 dark:to-themeColor-900 dark:selection:bg-themeColor-800/50 dark:selection:text-inherit dark:scrollbar-track:bg-themeColor-950 dark:scrollbar-thumb:bg-slate-500/50;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}

.admonition-note {
  @apply rounded-r border border-l-4 border-blue-200 bg-white p-2 shadow-lg shadow-blue-100 sm:p-4 dark:border-blue-600 dark:bg-blue-800 dark:shadow-blue-900;
}
.admonition-note-title {
  @apply font-bold;
}

.admonition-warning {
  @apply rounded-r border border-l-4 border-amber-200 bg-white p-2 shadow-lg shadow-amber-100 sm:p-4 dark:border-amber-600 dark:bg-amber-800 dark:shadow-amber-900;
}
.admonition-warning-title {
  @apply font-bold;
}

.admonition-important {
  @apply rounded-r border border-l-4 border-red-200 bg-white p-2 shadow-lg shadow-red-100 sm:p-4 dark:border-red-600 dark:bg-red-800 dark:shadow-red-900;
}
.admonition-important-title {
  @apply font-bold;
}

.admonition-tip {
  @apply rounded-r border border-l-4 border-green-200 bg-white p-2 shadow-lg shadow-green-100 sm:p-4 dark:border-green-600 dark:bg-green-800 dark:shadow-green-900;
}
.admonition-tip-title {
  @apply font-bold;
}

.admonition-caution {
  @apply rounded-r border border-l-4 border-orange-200 bg-white p-2 shadow-lg shadow-orange-100 sm:p-4 dark:border-orange-600 dark:bg-orange-800 dark:shadow-orange-900;
}
.admonition-caution-title {
  @apply font-bold;
}
</style>
