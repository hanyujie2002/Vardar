<template>
  <div>
    <VueAwesomePaginate
      v-model="currentPage"
      :total-items="totalRecords ?? 0"
      :items-per-page="perPage"
      :max-pages-shown="3"
      :disable-breakpoint-buttons="true"
      type="link"
      link-url="/blog?page=[page]"
      @click="onPageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { VueAwesomePaginate } from 'vue-awesome-paginate';

const { data: totalRecords } = await useAsyncData('totalRecords', () => queryContent('blog').count());

const perPage = ref(15);

const route = useRoute();

const page: (string | null | undefined) | (string | null | undefined)[] =
  route.query.page;

const currentPage: globalThis.Ref<number> = ref(1);

if (!(Array.isArray(page) || page === undefined || page === null)) {
  currentPage.value = parseInt(page);
}

const onPageChange = async (page: number) => {
  await navigateTo({
    path: '/blog',
    query: {
      page: page,
    },
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
