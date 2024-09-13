<template>
  <div>
    <VueAwesomePaginate
      v-model="pageNumber"
      :total-items="totalRecords"
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

const contentQuery = await queryContent('blog').find();

const totalRecords = contentQuery.length;
const perPage = ref(15);

const route = useRoute();

const page: (string | null) | (string | null)[] = route.query.page;

const pageNumber: globalThis.Ref<number> = ref(1);

if (!(Array.isArray(page) || page === null)) {
  pageNumber.value = parseInt(page);
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
