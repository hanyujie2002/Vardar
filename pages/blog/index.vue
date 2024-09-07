<template>
  <main class="mx-auto flex min-h-full w-full max-w-screen-xl flex-col pt-4">
    <ContentList :query="query">
      <template #default="{ list }">
        <ul class="mb-auto flex w-full flex-col divide-y divide-dashed">
          <li v-for="article in list" :key="article._path">
            <NuxtLink
              :to="article._path"
              class="block h-20 rounded px-4 py-2 font-sans text-white transition-all visited:block visited:h-20 visited:px-4 visited:py-2 visited:font-sans visited:text-lg visited:font-extrabold hover:backdrop-brightness-95 active:backdrop-brightness-90"
            >
              <h2>{{ article.title }}</h2>
            </NuxtLink>
          </li>
        </ul>

        <div class="my-4 flex justify-center">
          <PageNavBar class="flex" />
        </div>
      </template>

      <template #not-found>
        <p>你好像来到了没有知识的荒原</p>
      </template>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';
import PageNavBar from '~/components/PageNavBar.vue';

const route = useRoute();

const page: (string | null) | (string | null)[] = route.query.page;

const pageNumber: globalThis.Ref<number> = ref(1);

if (!(Array.isArray(page) || page === null)) {
  pageNumber.value = parseInt(page);
}

const query: QueryBuilderParams = computed(() => {
  return { skip: (pageNumber.value - 1) * 15, limit: 15 };
});

watch(
  () => route.query.page,
  (newPage) => {
    if (newPage === null || Array.isArray(newPage)) {
      pageNumber.value = 1;
    } else {
      pageNumber.value = parseInt(newPage);
    }
  }
);
</script>
