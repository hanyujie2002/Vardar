<template>
    <div>
        <VueAwesomePaginate
            :total-items="totalRecords"
            :items-per-page="perPage"
            :max-pages-shown="3"
            :disable-breakpoint-buttons="true"
            type="link"
            link-url="/blog?page=[page]"
            v-model="currentPage"
            @click="onPageChange"
        />
    </div>
</template>

<script setup>
import { VueAwesomePaginate } from 'vue-awesome-paginate';

const contentQuery = await queryContent('blog').find()

const totalRecords = contentQuery.length;
const perPage = ref(15);

const route = useRoute()

const currentPage = ref(parseInt(route.query.page) | 1);


const onPageChange = async (page) => {
    await navigateTo({
        path: '/blog',
        query: {
            page: page
        }
    });

    window.scrollTo(0, 0);
}
</script>

<style>
.pagination-container {
    @apply flex;
}

.paginate-buttons {
    @apply transition-all text-white backdrop-brightness-95 h-9 w-9 cursor-pointer rounded sm:h-12 sm:w-12 hover:backdrop-brightness-90 active:backdrop-brightness-75;
}

.active-page {
    @apply backdrop-brightness-75 hover:backdrop-brightness-75;
}

.back-button, .next-button {
    @apply mx-4;
}

.disabled-paginate-buttons {
    @apply backdrop-brightness-100 cursor-auto hover:backdrop-brightness-100 hover:cursor-auto;
}
</style>
