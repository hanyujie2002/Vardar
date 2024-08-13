<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr_auto] bg-white lg:max-w-screen-lg lg:m-auto">
    <!-- 导航栏 -->
    <nav class="block bg-black text-white">
      <ul class="flex gap-4 m-[1rem_3vw]">
        <li class="list-item "><NuxtLink class="transition-colors block text-lg font-bold border-[thick] border-double py-2 px-4 hover:text-black hover:bg-white hover:border-black active:bg-neutral-300" to="/">主页</NuxtLink></li>
        <li class="list-item "><NuxtLink class="transition-colors block text-lg font-bold border-[thick] border-double py-2 px-4 hover:text-black hover:bg-white hover:border-black active:bg-neutral-300" to="/about">个人介绍</NuxtLink></li>
        <li class="list-item "><NuxtLink class="transition-colors block text-lg font-bold border-[thick] border-double py-2 px-4 hover:text-black hover:bg-white hover:border-black active:bg-neutral-300" to="/blog">博客文章</NuxtLink></li>
      </ul>
    </nav>

    <!-- 页面主内容 -->
    <main class="overflow-auto mx-[3vw] ">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="text-center bg-black text-white py-4">
      <p>This blog is supported by Nuxt</p>
    </footer>
  </div>
</template>

<style scoped>
</style>