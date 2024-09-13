<template>
  <nav class="fixed text-white top-[--header-height] backdrop-blur-2xl w-screen h-[calc(100vh-var(--header-height))] z-50" :class="{ hidden: isFixedNavHidden }">
    <ul class="mx-auto mt-5 flex flex-col w-full">
      <li class="">
        <NuxtLink @click="hideFixedMenu" class="flex px-4 py-2 text-3xl font-bold transition-colors "
          :class="{ active: isAboutPage }" to="/about">{{ $t('about') }}</NuxtLink>
      </li>
      <li class="">
        <NuxtLink @click="hideFixedMenu" class="flex px-4 py-2 text-3xl font-bold transition-colors"
          :class="{ active: isBlogPage }" to="/blog">{{ $t('blog') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink @click="hideFixedMenu" class="flex px-4 py-2 text-3xl font-bold transition-colors" target="_blank" to="/feed.xml">
          RSS
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <div class="flex w-full flex-col rounded">
    <!-- 导航栏 -->
    <nav class="sticky top-0 z-40 flex h-[--header-height] flex-auto text-white backdrop-blur-2xl">
      <ul class="mx-auto my-auto flex w-full max-w-screen-xl gap-4">
        <li class="list-item">
          <NuxtLink @click="hideFixedMenu" class="flex flex-auto rounded px-4 py-2 text-2xl font-extrabold transition-colors" to="/">Alex
            Johnson</NuxtLink>
        </li>
        <li class="hidden my-auto sm:list-item">
          <NuxtLink
            class="my-auto flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isAboutPage }" to="/about">{{ $t('about') }}</NuxtLink>
        </li>
        <li class="hidden my-auto sm:list-item">
          <NuxtLink class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
            :class="{ active: isBlogPage }" to="/blog">{{ $t('blog') }}</NuxtLink>
        </li>
        <li class="hidden ml-auto sm:list-item">
          <NuxtLink target="_blank" to="/feed.xml">
            <Icon name="mdi:rss" class="size-12 transition-colors hover:text-yellow-100" />
          </NuxtLink>
        </li>
      </ul>

      <div class="flex my-auto mr-2 sm:hidden">
        <button @click="toggleFixedMenuState">
          <Icon name="mdi:menu" class="h-10 w-10"></Icon>
        </button>
      </div>

    </nav>

    <!-- 页面主内容 -->
    <main class="mx-auto mb-8 flex min-h-[calc(100vh-var(--header-height))] w-full">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="mx-auto flex flex-col w-full max-w-7xl px-4 py-8 sm:flex-row">
      <div class="mx-auto mb-2 order-2 sm:order-1 sm:mx-0">
        <span class="text-themeColor-300">Copyright © 2024</span>
        <span class="ml-3 text-themeColor-300">Alex Johnson</span>
      </div>
      <div class="mx-auto order-1 sm:order-2 sm:ml-auto sm:mr-0">
        <span class="ml-auto text-slate-200">Powered by</span>
        <NuxtLink class="ml-1 text-yellow-200 hover:underline" to="https://github.com/hanyujie2002/Vardar"
          target="_blank">Vardar blog template</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isFixedNavHidden = ref<boolean>(true);
const isAboutPage = computed(() => {
  return route.path.startsWith('/about');
});
const isBlogPage = computed(() => {
  return route.path.startsWith('/blog');
});
const toggleFixedMenuState = () => {
  isFixedNavHidden.value = !isFixedNavHidden.value;
}
const hideFixedMenu = () => {
  isFixedNavHidden.value = true;
}
</script>

<style scoped>
.active {
  @apply text-yellow-200 hover:text-yellow-200;
}
</style>
