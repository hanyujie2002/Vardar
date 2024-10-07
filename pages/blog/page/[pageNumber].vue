<template>
  <main class="mx-auto flex min-h-full w-full flex-col pt-4">
    <ul
      class="mx-auto mb-auto flex w-full max-w-4xl flex-col divide-y divide-dashed"
    >
      <li v-for="article in paginatedArticles" :key="article._path">
        <SiteLink
          :to="article._path"
          class="block h-20 rounded px-4 py-2 font-sans font-extralight transition-all visited:block visited:h-20 visited:px-4 visited:py-2 visited:font-sans visited:text-lg visited:font-extrabold hover:backdrop-brightness-95 active:backdrop-brightness-90 sm:tracking-wide dark:text-slate-300 dark:hover:backdrop-brightness-105 dark:active:backdrop-brightness-110 dark:hover:text-slate-200"
        >
          <p class="line-clamp-2">{{ article.title }}</p>
        </SiteLink>
      </li>
    </ul>
    <div class="my-4 flex justify-center">
      <VueAwesomePaginate
        v-model="currentPage"
        :total-items="totalRecords ?? 0"
        :items-per-page="perPage"
        :max-pages-shown="3"
        :hide-prev-next-when-ends="true"
        type="link"
        link-url="/blog/page/[page]"
        @click="onPageChange"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { VueAwesomePaginate } from 'vue-awesome-paginate';

useHead({
  title: 'Article List',
  meta: [{ name: 'description', content: 'Article List' }],
});

const route = useRoute();

const perPage = ref(15);
const currentPage: globalThis.Ref<number> = ref(1);

const page: (string | null) | (string | null)[] = route.params.pageNumber;

if (!(Array.isArray(page) || page === undefined || page === null)) {
  currentPage.value = parseInt(page);
}

const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/blog').only(['title', '_path']).find()
);

const totalRecords = computed(() => articles.value?.length);

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return articles.value?.slice(start, end);
});

watch(
  () => route.params.pageNumber,
  (newPage) => {
    if (newPage === null || Array.isArray(newPage)) {
      currentPage.value = 1;
    } else {
      currentPage.value = parseInt(newPage);
    }
  }
);

const onPageChange = async (page: number) => {
  await navigateTo({
    path: `/blog/page/${page}`,
  });

  window.scrollTo(0, 0);
};
</script>

<style>
.pagination-container {
  @apply flex;
}

.paginate-buttons {
  @apply h-9 w-9 cursor-pointer rounded text-white backdrop-brightness-95 transition-all hover:backdrop-brightness-90 active:backdrop-brightness-75 sm:h-12 sm:w-12;
}

.active-page {
  @apply backdrop-brightness-75 hover:backdrop-brightness-75;
}

.back-button,
.next-button {
  @apply mx-4;
}

.disabled-paginate-buttons {
  @apply cursor-auto backdrop-brightness-100 hover:cursor-auto hover:backdrop-brightness-100;
}
</style>
