<template>
    <main class="flex flex-col pt-4 min-h-full">
        <ContentList :query="query">
            <template #default="{list}">
                <ul class="flex flex-col gap-4 w-full mb-auto">
                    <li v-for="article in list" :key="article._path">
                        <NuxtLink :to="article._path" class="transition-colors block font-extrabold font-sans py-2 px-4 h-20 m-auto outline-dashed visited:block visited:text-lg visited:font-extrabold visited:font-sans visited:py-2 visited:px-4 visited:h-20 visited:m-auto visited:outline-dashed hover:bg-black hover:text-white active:bg-neutral-800">
                            <h2>{{ article.title }}</h2>
                        </NuxtLink>
                    </li>
                </ul>

                <div class="flex justify-center my-4">
                    <PageNavBar class="flex"/>
                </div>
            </template>

            <template #not-found>
                <p>你好像来到了没有知识的荒原</p>
            </template>
        </ContentList>
    </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'
import PageNavBar from '~/componets/PageNavBar.vue';

const route = useRoute();

const page: (string | null) | (string | null)[] = route.query.page;

const pageNumber: globalThis.Ref<number> = ref(1);

if (!(Array.isArray(page) || page === null)) {
    pageNumber.value = parseInt(page);
}

const query: QueryBuilderParams = computed(() => {
    return { skip: (pageNumber.value - 1) * 15, limit: 15 }
})

watch(() => route.query.page, (newPage) => {
    if (newPage === null || Array.isArray(newPage)) {
        pageNumber.value = 1
    } else {
        pageNumber.value = parseInt(newPage)
    }
})
</script>
