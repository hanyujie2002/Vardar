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
body {
  --header-height: 4rem;
  @apply scroll-smooth bg-gradient-to-r from-white to-themeColor-50 text-sm transition-all selection:bg-themeColor-100 selection:text-themeColor-400 scrollbar:w-2.5 scrollbar:bg-transparent scrollbar-track:bg-slate-200 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 sm:text-base dark:selection:bg-themeColor-800/50 dark:selection:text-inherit dark:scrollbar-track:bg-themeColor-950 dark:scrollbar-thumb:bg-slate-500/50;
  scroll-behavior: smooth;
  scroll-margin-top: 1000px;
}

body::before {
  content: '';
  @apply fixed left-0 top-0 -z-10 h-[100dvh] w-screen bg-gradient-to-r from-themeColor-950 to-themeColor-900 opacity-0 transition-opacity dark:opacity-100;
}

.admonition-note {
  @apply rounded-r border border-l-4 border-blue-200 bg-white p-2 shadow-lg shadow-blue-100 transition-colors sm:p-4 dark:border-blue-600 dark:bg-blue-800 dark:shadow-blue-900;
}
.admonition-note-title {
  @apply font-bold;
}
.admonition-note-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cpath fill='%23bfdbfe' d='M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z'/%3E%3C/svg%3E");
  @apply mr-1;
}

.admonition-warning {
  @apply rounded-r border border-l-4 border-amber-200 bg-white p-2 shadow-lg shadow-amber-100 transition-colors sm:p-4 dark:border-amber-600 dark:bg-amber-800 dark:shadow-amber-900;
}
.admonition-warning-title {
  @apply font-bold;
}
.admonition-warning-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cpath fill='%23fde047' d='M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2'/%3E%3C/svg%3E");
  @apply mr-1;
}
.dark .admonition-warning-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cpath fill='%23fef3c7' d='M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2'/%3E%3C/svg%3E");
  @apply mr-1;
}

.admonition-important {
  @apply rounded-r border border-l-4 border-red-200 bg-white p-2 shadow-lg shadow-red-100 transition-colors sm:p-4 dark:border-red-600 dark:bg-red-800 dark:shadow-red-900;
}
.admonition-important-title {
  @apply font-bold;
}
.admonition-important-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 48 48'%3E%3Cpath fill='%23fecaca' stroke='%23fecaca' stroke-linejoin='round' stroke-width='4' d='M24 44c8.235 0 15-6.526 15-14.902c0-2.056-.105-4.26-1.245-7.686s-1.369-3.868-2.574-5.984c-.515 4.317-3.27 6.117-3.97 6.655c0-.56-1.666-6.747-4.193-10.45C24.537 8 21.163 5.617 19.185 4c0 3.07-.863 7.634-2.1 9.96c-1.236 2.325-1.468 2.41-3.013 4.14s-2.253 2.265-3.545 4.365S9 27.362 9 29.418C9 37.794 15.765 44 24 44Z'/%3E%3C/svg%3E");
  @apply mr-1;
}

.admonition-tip {
  @apply rounded-r border border-l-4 border-green-200 bg-white p-2 shadow-lg shadow-green-100 transition-colors sm:p-4 dark:border-green-600 dark:bg-green-800 dark:shadow-green-900;
}
.admonition-tip-title {
  @apply font-bold;
}
.admonition-tip-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cpath fill='%2386efac' d='M10 18q-.825 0-1.412-.587T8 16v-1.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V16q0 .825-.587 1.413T14 18zm0 4q-.425 0-.712-.288T9 21v-1h6v1q0 .425-.288.713T14 22z'/%3E%3C/svg%3E");
  @apply mr-1;
}
.dark .admonition-tip-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cpath fill='%23bbf7d0' d='M10 18q-.825 0-1.412-.587T8 16v-1.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V16q0 .825-.587 1.413T14 18zm0 4q-.425 0-.712-.288T9 21v-1h6v1q0 .425-.288.713T14 22z'/%3E%3C/svg%3E");
  @apply mr-1;
}

.admonition-caution {
  @apply rounded-r border border-l-4 border-orange-200 bg-white p-2 shadow-lg shadow-orange-100 transition-colors sm:p-4 dark:border-orange-600 dark:bg-orange-800 dark:shadow-orange-900;
}
.admonition-caution-title {
  @apply font-bold;
}
.admonition-caution-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23fdba74'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 1 1 2.506 0'/%3E%3Ccircle cx='12' cy='19' r='1' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
}
.dark .admonition-caution-title::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.9em' height='0.9em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23fed7aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 1 1 2.506 0'/%3E%3Ccircle cx='12' cy='19' r='1' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
}

[id^='user-content-fn-'] {
  @apply my-3;
}
</style>
