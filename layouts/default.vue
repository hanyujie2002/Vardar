<template>
  <div class="rounded w-full flex flex-col">
    <!-- 导航栏 -->
    <nav class="flex flex-auto sticky top-0 h-[--header-height] text-white backdrop-blur-2xl z-50">
      <ul class="flex max-w-screen-xl w-full mx-auto gap-4 my-auto">
        <li class="list-item"><NuxtLink class="transition-colors flex flex-auto text-lg font-bold py-2 px-4 rounded hover:text-rose-100" to="/">主页</NuxtLink></li>
        <li class="list-item"><NuxtLink class="transition-colors flex flex-auto text-lg font-bold py-2 px-4 rounded hover:text-rose-100" to="/about">个人介绍</NuxtLink></li>
        <li class="list-item"><NuxtLink class="transition-colors flex flex-auto text-lg font-bold py-2 px-4 rounded hover:text-rose-100" to="/blog">博客文章</NuxtLink></li>
        <li class="list-item ml-auto"><NuxtLink target="_blank" to="/feed.xml"><Icon name="mdi:rss" class="transition-colors size-12 hover:text-rose-100"></Icon></NuxtLink></li>
      </ul>
    </nav>

    <!-- 页面主内容 -->
    <main class="flex w-full mx-auto max-w-screen-xl min-h-[calc(100vh-var(--header-height))] lg:px-8">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="text-center text-white py-4">
      <p>This blog is supported by Nuxt</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
