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
    @apply bg-gray-100 h-9 w-9 cursor-pointer rounded sm:h-12 sm:w-12;
}

.paginate-buttons:hover {
    @apply bg-gray-300;
}

.active-page {
    @apply bg-gray-900 text-white;
}

.active-page:hover {
    @apply bg-gray-800 text-white;
}

.back-button, .next-button {
    @apply bg-gray-100 text-gray-700 mx-4;
}

.disabled-paginate-buttons, .disabled-paginate-buttons:hover {
    @apply bg-white cursor-auto;
}
</style>
