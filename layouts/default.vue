<template>
  <div>
    <nav
      class="fixed top-[--header-height] z-50 h-[calc(100vh-var(--header-height))] w-screen text-slate-600 dark:text-white backdrop-blur-2xl"
      :class="{ hidden: isFixedNavHidden }">
      <ul class="mx-auto mt-5 flex w-full flex-col">
        <li class="">
          <NuxtLink class="flex px-4 py-2 text-3xl font-bold transition-colors" :class="{ active: isAboutPage }"
            to="/about" @click="hideFixedMenu">{{ $t('about') }}</NuxtLink>
        </li>
        <li class="">
          <NuxtLink class="flex px-4 py-2 text-3xl font-bold transition-colors" :class="{ active: isBlogPage }"
            to="/blog" @click="hideFixedMenu">{{ $t('blog') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="flex px-4 py-2 text-3xl font-bold transition-colors" target="_blank" to="/feed.xml"
            @click="hideFixedMenu">
            RSS
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="flex w-full flex-col rounded">
      <!-- 导航栏 -->
      <nav class="sticky top-0 z-40 flex h-[--header-height] flex-auto text-black dark:text-white backdrop-blur-2xl">
        <ul class="mx-auto my-auto flex w-full max-w-screen-xl gap-4">
          <li class="list-item">
            <NuxtLink class="flex flex-auto rounded px-4 py-2 text-2xl font-extrabold transition-colors" to="/"
              @click="hideFixedMenu">Alex Johnson</NuxtLink>
          </li>
          <li class="my-auto hidden sm:list-item">
            <NuxtLink
              class="my-auto flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-500 dark:hover:text-yellow-100"
              :class="{ active: isAboutPage }" to="/about">{{ $t('about') }}</NuxtLink>
          </li>
          <li class="my-auto hidden sm:list-item">
            <NuxtLink
              class="flex flex-auto rounded px-4 py-2 text-lg font-bold transition-colors hover:text-yellow-500 dark:hover:text-yellow-100"
              :class="{ active: isBlogPage }" to="/blog">{{ $t('blog') }}</NuxtLink>
          </li>
          <li class="ml-auto my-auto list-item">
            <button @click="showSearchModal">
              <Icon name="mdi:search"
                class="size-10 sm:size-12 transition-colors hover:text-yellow-500 active:text-yellow-400 dark:hover:text-yellow-100 dark:active:text-yellow-200" />
            </button>
          </li>
          <li class="list-item my-auto">
            <button @click="switchColorMode">
              <Icon :name="savedTheme !== 'dark' ? 'material-symbols:sunny-outline-rounded' : 'material-symbols:dark-mode-outline-rounded'"
                class="size-10 sm:size-12 transition-colors hover:text-yellow-500 active:text-yellow-400 dark:hover:text-yellow-100 dark:active:text-yellow-200" />
            </button>
          </li>
          <li class="hidden my-auto sm:list-item">
            <NuxtLink target="_blank" to="/feed.xml">
              <Icon name="mdi:rss"
                class="size:5 sm:size-12 transition-colors hover:text-yellow-500 active:text-yellow-400 dark:hover:text-yellow-100 dark:active:text-yellow-200" />
            </NuxtLink>
          </li>
          <li class="mr-2 my-auto sm:hidden">
            <button @click="toggleFixedMenuState">
              <Icon :name="burgerMenuIconName" class="size-10 sm:size-12" />
            </button>
          </li>
        </ul>
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
          <span class="ml-auto text-slate-700 dark:text-slate-200">Powered by</span>
          <NuxtLink class="ml-1 text-yellow-400 dark:text-yellow-200 hover:underline"
            to="https://github.com/hanyujie2002/Vardar" target="_blank">Vardar blog template</NuxtLink>
        </div>
      </footer>
    </div>

    <!-- 搜索框 -->
    <dialog ref="dialogRef"
      class="w-screen h-dvh max-h-none max-w-none sm:h-[28rem] sm:w-full custom-max-width bg-themeColor-100 sm:bg-themeColor-100/80 dark:bg-themeColor-600 dark:sm:bg-themeColor-600/80 backdrop:backdrop-blur-sm"
      @click="handleBackdropClicked" @keydown="handleEscKeyDown">
      <div class="flex flex-col w-full h-full rounded text-slate-700 dark:text-slate-100 shadow-xl">
        <div class="relative flex items-center border-b border-themeColor-300/50 dark:border-themeColor-200/30">
          <Icon name="mdi:search" class="flex m-3 h-10 w-10 sm:h-5 sm:w-5" />
          <input v-model="search" placeholder="search blog"
            class="flex h-[--header-height] sm:h-12 flex-grow bg-transparent focus:outline-none placeholder:text-themeColor-400/50 dark:placeholder:text-themeColor-200/50">
          <button class="group" @click="hideSearchModal">
            <Icon name="mdi:close"
              class="flex h-10 w-10 sm:h-5 sm:w-5 m-3 group-hover:text-yellow-500 dark:group-hover:text-yellow-300" />
          </button>
        </div>
        <div v-if="search.length" class="flex flex-col overflow-y-auto">
          <div v-for="result in results" :key="result.id"
            class="border-b border-themeColor-200 dark:border-themeColor-200/30">
            <NuxtLink class="flex flex-col p-4 hover:backdrop-brightness-95 active:backdrop-brightness-90"
              :to="result.id" @click="hideSearchModal">
              <h3 class="text-lg font-semibold result.title line-clamp-2">
                <span v-if="result.titles.length" class="after:content-['_>_']">
                  {{ result.titles[0] }}
                </span>
                <span>
                  {{ result.title }}
                </span>
              </h3>
              <p class="text-sm text-themeColor-400 dark:text-themeColor-200 line-clamp-2">{{ result.content }}</p>
            </NuxtLink>
          </div>
        </div>
        <div v-else class="flex flex-grow justify-center items-center">
          <span class="flex flex-grow justify-center text-5xl text-center">Type to search🔎</span>
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

const savedTheme = useCookie('saved_theme')
savedTheme.value = savedTheme.value || 'light'

const search = ref<string>('')
const dialogRef = ref<HTMLDialogElement>()

const results = ref()

watch(search, async (newSearch: string) => {
  const res = await searchContent(newSearch);
  results.value = res.value;
})

useHead({
  htmlAttrs: {
    class: savedTheme.value === 'dark' ? 'dark' : ''
  }
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
  isFixedNavHidden.value = true;
  burgerMenuIconName.value = 'mdi:menu';
  dialogRef.value?.showModal()
}
const hideSearchModal = () => {
  documentElement.value.classList.remove('overflow-hidden');
  search.value = '';
  dialogRef.value?.close()
}
const switchColorMode = () => {
  if (savedTheme.value === 'light') {
    documentElement.value.classList.add('dark');
    savedTheme.value = 'dark';
  } else {
    documentElement.value.classList.remove('dark');
    savedTheme.value = 'light';
  }
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
  @apply text-yellow-400 hover:text-yellow-400 dark:text-yellow-200 dark:hover:text-yellow-200;
}

@media (min-width: 640px) {
  .custom-max-width {
    max-width: min(48rem, calc(100vw - 2rem));
  }
}
</style>
