<template>
  <div>
    <nav
      class="fixed top-[--header-height] z-50 h-[calc(100vh-var(--header-height))] w-screen text-white backdrop-blur-2xl"
      :class="{ hidden: isFixedNavHidden }">
      <ul class="mx-auto mt-5 flex w-full flex-col">
        <li class="">
          <NuxtLink
class="flex px-4 py-2 text-3xl font-bold transition-colors" :class="{ active: isAboutPage }"
            to="/about" @click="hideFixedMenu">{{ $t('about') }}</NuxtLink>
        </li>
        <li class="">
          <NuxtLink
class="flex px-4 py-2 text-3xl font-bold transition-colors" :class="{ active: isBlogPage }"
            to="/blog" @click="hideFixedMenu">{{ $t('blog') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink
class="flex px-4 py-2 text-3xl font-bold transition-colors" target="_blank" to="/feed.xml"
            @click="hideFixedMenu">
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
            <NuxtLink
class="flex flex-auto rounded px-4 py-2 text-2xl font-extrabold transition-colors" to="/"
              @click="hideFixedMenu">Alex Johnson</NuxtLink>
          </li>
          <li class="my-auto hidden sm:list-item">
            <NuxtLink
              class="my-auto flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
              :class="{ active: isAboutPage }" to="/about">{{ $t('about') }}</NuxtLink>
          </li>
          <li class="my-auto hidden sm:list-item">
            <NuxtLink
class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-100"
              :class="{ active: isBlogPage }" to="/blog">{{ $t('blog') }}</NuxtLink>
          </li>
          <li class="ml-auto list-item">
            <button @click="showSearchModal">
              <Icon name="mdi:search" class="size-12 transition-colors hover:text-yellow-100 active:text-yellow-200" />
            </button>
          </li>
          <li class="hidden sm:list-item">
            <NuxtLink target="_blank" to="/feed.xml">
              <Icon name="mdi:rss" class="size-12 transition-colors hover:text-yellow-100" />
            </NuxtLink>
          </li>
        </ul>

        <div class="my-auto mr-2 flex sm:hidden">
          <button @click="toggleFixedMenuState">
            <Icon :name="burgerMenuIconName" class="h-10 w-10" />
          </button>
        </div>
      </nav>

      <!-- 页面主内容 -->
      <main class="mx-auto mb-8 flex break-words min-h-[calc(100vh-var(--header-height))] w-full">
        <slot />
      </main>

      <!-- 页脚 -->
      <footer class="mx-auto flex w-full max-w-7xl flex-col px-4 py-8 sm:flex-row">
        <div class="order-2 mx-auto mb-2 sm:order-1 sm:mx-0">
          <span class="text-themeColor-300">Copyright © 2024</span>
          <span class="ml-3 text-themeColor-300">Alex Johnson</span>
        </div>
        <div class="order-1 mx-auto sm:order-2 sm:ml-auto sm:mr-0">
          <span class="ml-auto text-slate-200">Powered by</span>
          <NuxtLink
class="ml-1 text-yellow-200 hover:underline" to="https://github.com/hanyujie2002/Vardar"
            target="_blank">Vardar blog template</NuxtLink>
        </div>
      </footer>
    </div>

    <!-- 搜索框 -->
    <dialog
ref="dialogRef"
      class="w-full custom-max-width top-0 bottom-0 bg-transparent backdrop:backdrop-blur-sm"
      @click="handleBackdropClicked"
      @keydown="handleEscKeyDown">
      <div class="flex flex-col h-[28rem] w-full rounded bg-themeColor-600 text-slate-100 shadow-xl">
        <div class="relative flex items-center border-b border-themeColor-200/30">
          <Icon name="mdi:search" class="flex m-3 h-5 w-5" />
          <input
v-model="search" placeholder="search blog"
            class="flex h-12 flex-grow bg-themeColor-600 focus:outline-none placeholder:text-themeColor-200/50">
          <button class="group" @click="hideSearchModal">
            <Icon name="mdi:close" class="flex h-5 w-5 m-3 group-hover:text-yellow-300" />
          </button>
        </div>
        <div v-if="search.length" class="flex flex-col overflow-y-auto">
          <div v-for="result in results" :key="result.id" class="p-4 border-b border-themeColor-200/30">
            <a :href="result.id">
              <h3 class="text-lg font-semibold result.title line-clamp-2">
                <span v-if="result.titles.length" class="after:content-['_>_']">
                  {{ result.titles[0] }}
                </span>
                <span>
                  {{ result.title }}
                </span>
              </h3>
              <p class="text-sm text-themeColor-200 line-clamp-2">{{ result.content }}</p>
            </a>
          </div>
        </div>
        <div v-else class="flex flex-grow justify-center items-center">
          <span class="flex flex-grow justify-center text-5xl">Type to search🔎</span>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isFixedNavHidden = ref<boolean>(true);
const documentElement = ref();
const burgerMenuIconName = ref<string>('mdi:menu');

const search = ref<string>('')
const dialogRef = ref<HTMLDialogElement>()

const results = ref()

watch(search, async (newSearch: string) => {
  const res = await searchContent(newSearch);
  results.value = res.value;
})

onMounted(() => {
  documentElement.value = document.documentElement;
});
const isAboutPage = computed(() => {
  return route.path.startsWith('/about');
});
const isBlogPage = computed(() => {
  return route.path.startsWith('/blog');
});
const toggleFixedMenuState = () => {
  if (isFixedNavHidden.value === true) {
    documentElement.value.classList.add('overflow-hidden');
    burgerMenuIconName.value = 'mdi:close';
  } else {
    documentElement.value.classList.remove('overflow-hidden');
    burgerMenuIconName.value = 'mdi:menu';
  }

  isFixedNavHidden.value = !isFixedNavHidden.value;
};
const hideFixedMenu = () => {
  isFixedNavHidden.value = true;
  documentElement.value.classList.remove('overflow-hidden');
  burgerMenuIconName.value = 'mdi:menu';
};
const showSearchModal = () => {
  documentElement.value.classList.add('overflow-hidden');
  dialogRef.value?.showModal()
}
const hideSearchModal = () => {
  documentElement.value.classList.remove('overflow-hidden');
  dialogRef.value?.close()
}

const handleBackdropClicked = (event: MouseEvent) => {
  if (event.target == dialogRef.value) {
    hideSearchModal()
  }
}

const handleEscKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    hideSearchModal();
  }
}
</script>

<style scoped>
.active {
  @apply text-yellow-200 hover:text-yellow-200;
}

.custom-max-width {
  max-width: min(48rem, calc(100vw - 2rem));
}
</style>
