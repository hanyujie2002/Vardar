<template>
  <div class="rounded min-h-screen grid grid-rows-[auto_1fr_auto] lg:max-w-screen-lg lg:m-auto">
    <!-- 导航栏 -->
    <nav class="block  text-white">
      <ul class="flex gap-4 m-[1rem_3vw]">
        <li class="list-item"><NuxtLink class="transition-colors flex text-lg font-bold py-2 px-4 rounded hover:backdrop-brightness-95 active:backdrop-brightness-90" to="/">主页</NuxtLink></li>
        <li class="list-item"><NuxtLink class="transition-colors flex text-lg font-bold py-2 px-4 rounded hover:backdrop-brightness-95 active:backdrop-brightness-90" to="/about">个人介绍</NuxtLink></li>
        <li class="list-item"><NuxtLink class="transition-colors flex text-lg font-bold py-2 px-4 rounded hover:backdrop-brightness-95 active:backdrop-brightness-90" to="/blog">博客文章</NuxtLink></li>
        <li class="list-item ml-auto"><NuxtLink target="_blank" class="flex" to="/feed.xml"><Icon name="mdi:rss" class="size-12 hover:text-yellow-200"></Icon></NuxtLink></li>
      </ul>
    </nav>

    <!-- 页面主内容 -->
    <main class="overflow-auto mx-[3vw] ">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="text-center  text-white py-4">
      <p>This blog is supported by Nuxt</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
