<template>
  <div class="flex w-full flex-col rounded">
    <!-- 导航栏 -->
    <nav
      class="sticky top-0 z-50 flex h-[--header-height] flex-auto text-white backdrop-blur-2xl"
    >
      <ul class="mx-auto my-auto flex w-full max-w-screen-xl gap-4">
        <li class="list-item">
          <NuxtLink
            class="flex flex-auto rounded px-4 py-2 text-2xl font-extrabold transition-colors"
            to="/"
            >Alex Johnson</NuxtLink
          >
        </li>
        <li class="my-auto list-item">
          <NuxtLink
            class="my-auto flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isAboutPage }"
            to="/about"
            >{{ $t('about') }}</NuxtLink
          >
        </li>
        <li class="my-auto list-item">
          <NuxtLink
            class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isBlogPage }"
            to="/blog"
            >{{ $t('blog') }}</NuxtLink
          >
        </li>
        <li class="ml-auto list-item">
          <NuxtLink target="_blank" to="/feed.xml">
            <Icon
              name="mdi:rss"
              class="size-12 transition-colors hover:text-yellow-100"
            />
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- 页面主内容 -->
    <main
      class="mx-auto mb-8 flex min-h-[calc(100vh-var(--header-height))] w-full"
    >
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="mx-auto flex w-full max-w-7xl flex-row px-4 py-8">
      <div>
        <span class="text-themeColor-300">Copyright © 2024</span>
        <span class="ml-3 text-themeColor-300">Alex Johnson</span>
      </div>
      <span class="ml-auto text-slate-200">Powered by</span>
      <NuxtLink
        class="ml-1 text-yellow-200 hover:underline"
        to="https://github.com/hanyujie2002/Vardar"
        target="_blank"
        >Vardar blog template</NuxtLink
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isAboutPage = computed(() => {
  return route.path.startsWith('/about');
});
const isBlogPage = computed(() => {
  return route.path.startsWith('/blog');
});
</script>

<style scoped>
.active {
  @apply text-yellow-200 hover:text-yellow-200;
}
</style>
