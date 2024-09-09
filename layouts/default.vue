<template>
  <div class="flex w-full flex-col rounded">
    <!-- 导航栏 -->
    <nav
      class="sticky top-0 z-50 flex h-[--header-height] flex-auto text-white backdrop-blur-2xl"
    >
      <ul class="mx-auto my-auto flex w-full max-w-screen-xl gap-4">
        <li class="list-item">
          <NuxtLink
            class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isMainPage }"
            to="/"
            >主页</NuxtLink
          >
        </li>
        <li class="list-item">
          <NuxtLink
            class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isAboutPage }"
            to="/about"
            >个人介绍</NuxtLink
          >
        </li>
        <li class="list-item">
          <NuxtLink
            class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isBlogPage }"
            to="/blog"
            >博客文章</NuxtLink
          >
        </li>
        <li class="ml-auto list-item">
          <NuxtLink target="_blank" to="/feed.xml"
            ><Icon
              name="mdi:rss"
              class="size-12 transition-colors hover:text-yellow-100"
          /></NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- 页面主内容 -->
    <main class="mx-auto flex min-h-[calc(100vh-var(--header-height))] w-full">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="py-4 text-center text-white">
      <p>This blog is supported by Nuxt</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const isMainPage = computed(() => {
  return route.path === '/';
});
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
